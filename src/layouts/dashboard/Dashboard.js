import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'

class Dashboard extends Component {

  constructor(props, context) {
    super(props);
    this.contracts = context.drizzle.contracts;
    this.dataKey = this.contracts.GBCVotes.methods.numElections.cacheCall();
    this.state = { choice: '' };
  }

  componentDidUpdate() {
    if (this.dataKey in this.props.GBCVotes.numElections)
      this.raceKey = this.contracts.GBCVotes.methods.getRace.cacheCall(this.props.GBCVotes.numElections[this.dataKey].value);

    if (this.raceKey in this.props.GBCVotes.getRace) {
      
      var candidates = this.props.GBCVotes.getRace[this.raceKey].value.initialString;
      var names = candidates.split(',');
    }
  }

  onChange = (event) => {
    this.state.choice = event.target.value;
  }

  onSubmit = (event) => {
    event.preventDefault();
    const stackId = this.contracts.GBCVotes.methods.vote.cacheSend(
      this.props.GBCVotes.numElections[this.dataKey].value,
      this.state.choice
    )
  }

  render() {

    if (!(this.dataKey in this.props.GBCVotes.numElections) || !(this.raceKey in this.props.GBCVotes.getRace)) {

      return (
        <span> loading... </span>
      );

    }

    var numElections = this.props.GBCVotes.numElections[this.dataKey].value;
    var candidates = this.props.GBCVotes.getRace[this.raceKey].value.initialString;

    var names = candidates.split(',');
    var counter1 = 1;
    var counter2 = 0;

    return (
      <div>
        <h1> There have been {numElections} elections </h1>
        <form onSubmit={this.onSubmit}>
          <select onChange={this.onChange}>
            {
              names.map(name => <option value={counter1} key={++counter1}>{name}</option>)
            }
          </select>
          <button type="submit"> Vote </button>
        </form>

        <div>
          <h1>Results: </h1>
          {
            names.map(name => <ContractData contract="GBCVotes"
                method="getVotesOfCandidate" methodArgs={[numElections, ++counter2]} />)
          }

        </div>

      </div>
    )
  }
}

Dashboard.contextTypes = {
  drizzle: PropTypes.object
}

export default Dashboard;