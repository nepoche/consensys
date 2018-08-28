pragma solidity ^0.4.23;

import "../installed_contracts/zeppelin/contracts/token/StandardToken.sol";

contract TutorialToken is StandardToken {
  string public name = "TutorialToken";
  string public symbol = "TT";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 12000;

  constructor() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
