pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/GBCVotes.sol";

contract TestGBCVotes {

    function testIncorrectNumberOfCandidatesWillThrow() {
        GBCVotes gbc = new GBCVotes();
        ThrowProxy throwproxy = new ThrowProxy(address(gbc));
        GBCVotes(address(throwproxy)).createElection(5, "joe,tom,phil");
        bool r = throwproxy.execute.gas(200000)();
        Assert.isFalse(r, "Should be false because we said there were 5 candidates but only passed 3");
    }


    function testMembersCannotVoteTwice() {
        GBCVotes gbc = new GBCVotes();
        gbc.createElection(3, "joe,tom,phil");
        gbc.vote(1, 1);
        ThrowProxy throwproxy = new ThrowProxy(address(gbc));
        GBCVotes(address(throwproxy)).vote(1, 1);
        bool r = throwproxy.execute.gas(200000)();
        Assert.isFalse(r, "Should be false because we are trying to vote twice");
    }

    function testMembersCannotVoteWhenFrozen() {
        GBCVotes gbc = new GBCVotes();
        gbc.createElection(3, "joe,tom,phil");
        gbc.freeze();
        ThrowProxy throwproxy = new ThrowProxy(address(gbc));
        GBCVotes(address(throwproxy)).vote(1, 1);
        bool r = throwproxy.execute.gas(200000)();
        Assert.isFalse(r, "Should be false because we are attempting to vote when it is frozen");
    }

}

// Proxy contract for testing throws
contract ThrowProxy {
  address public target;
  bytes data;

  function ThrowProxy(address _target) {
    target = _target;
  }

  //prime the data using the fallback function.
  function() {
    data = msg.data;
  }

  function execute() returns (bool) {
    return target.call(data);
  }
}