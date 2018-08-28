//solium-disable
pragma solidity ^0.4.24;

import "./strings.sol";
import "../installed_contracts/zeppelin/contracts/math/SafeMath.sol";

contract GBCVotes {

    using SafeMath for uint;
    using strings for *;

    address public moderator;
    mapping (address => bool) public approvedMembers;
    mapping (uint => Election) public elections;
    uint256 public numElections;
    bool isFrozen;

    event ElectionCreated(uint electionID);
    event MemberApproved();
    event MemberRemoved();
    event Voted();

    struct Election {
        string initialString;
        string[] candidateNames;
        mapping (string => uint) candidateVotes;
        mapping (string => uint) candidateIndices;
        mapping (address => uint) eligibleVoters;
    }

    modifier onlyModerator {
        require(msg.sender == moderator);
        _;
    }

    modifier onlyApproved {
        require(approvedMembers[msg.sender] == true);
        _;
    }

    modifier thawed {
        require(!isFrozen);
        _;
    }

    function GBCVotes() public {
        moderator = msg.sender;
        numElections = 0;
        approvedMembers[moderator] = true;
    }

    function freeze() onlyModerator public {
        isFrozen = true;
    }

    function thaw() onlyModerator public {
        isFrozen = false;
    }

    // public function for the moderator to create a race 
    function createElection(uint numCandidates, string candidates) onlyModerator public {
        var s = candidates.toSlice();
        var delim = ",".toSlice();
        require(s.count(delim) == numCandidates-1);
        numElections++;
        Election storage r = elections[numElections];
        r.initialString = candidates;
        r.candidateNames = new string[](numCandidates+1);
        for (uint i=1; i<r.candidateNames.length; i++) {
            r.candidateNames[i] = s.split(delim).toString();
            r.candidateIndices[r.candidateNames[i]] = i;
        }
        ElectionCreated(numElections);
    }

    // Approved Members can vote
    function vote(uint raceIndex, uint candidate) onlyApproved thawed public {
        Election storage current = elections[raceIndex];
        require(current.eligibleVoters[msg.sender] == 0);
        require(current.candidateNames.length >= candidate);
        current.eligibleVoters[msg.sender] = candidate;
        current.candidateVotes[current.candidateNames[candidate]] += 1;
        Voted();
    }

    // function where moderator can approve member
    function approveMember(address member) onlyModerator public {
        approvedMembers[member] = true;
        MemberApproved();
    }

    function removeMember(address member) onlyModerator public {
        approvedMembers[member] = false;
        MemberRemoved();
    }

    function getVotesOfCandidate(uint raceIndex, uint candidateIndex) constant public returns(
        string candidateName,
        uint voteCount)
    {
        Election storage r = elections[raceIndex];
        candidateName = r.candidateNames[candidateIndex];
        voteCount = r.candidateVotes[candidateName];
    }

    function getRace(uint raceIndex) constant public returns (
        string initialString, uint numCandidates)
    {
        Election memory r = elections[raceIndex];
        initialString = r.initialString;
        numCandidates = r.candidateNames.length-1;
    }

    function getCandidateIndex(uint raceIndex, string candidateName) constant public returns (uint) {
        Election storage r = elections[raceIndex];
        require (r.candidateIndices[candidateName] != 0);
        uint candidateIndex = r.candidateIndices[candidateName];
        return candidateIndex;
    }

    function didMemberVote(uint raceIndex, address member) constant public returns (bool voted) {
        Election storage r = elections[raceIndex];
        if (r.eligibleVoters[member] != 0) {
            voted = true;
        } else {
            voted = false;
        }
    }

}