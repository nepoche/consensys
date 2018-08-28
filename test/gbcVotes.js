var GBCVotes = artifacts.require("./GBCVotes.sol");

contract('GBCVotes', function(accounts) {

    it("...should increase election count upon election creation", function() {

        return GBCVotes.deployed().then(function(instance) {
            gbc = instance;

            return gbc.createElection(3, "joe,phil,tom", {from: accounts[0]});
        }).then(function() {
            return gbc.numElections.call();
        }).then(function(result) {
            assert.equal(result.toString(10), 1, "Num Elections variable did not appropriately udpate")
        })
    })

    it("...should let approved members vote in an election", function() {
        
        return GBCVotes.deployed().then(function(instance) {
            gbc = instance;

            return gbc.createElection(3, "joe,phil,tom", {from: accounts[0]});
        }).then(function() {
            return gbc.vote(1,1);
        }).then(function() {
            return gbc.getVotesOfCandidate.call(1, 1);
        }).then(function(res) {
            return res[1].toNumber();
        }).then(function(result) {
            assert.equal(result, 1, "The candidate should have a vote count of one after a member votes");
        })


    })

})
