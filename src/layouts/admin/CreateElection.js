import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'

class CreateElection extends Component {

    constructor(props, context) {
        super(props);
        this.contracts = context.drizzle.contracts;
        this.numElections = this.contracts.GBCVotes.methods.numElections.cacheCall();
    }

    render() {

        if(!(this.numElections in this.props.GBCVotes.numElections)) {
            return (
                <span>Loading...</span>
            )
        }

        var data = this.props.GBCVotes.numElections[this.numElections].value;

        return (
            <div>

                <h1>Currently {data} elections exist</h1>

                <div>
                    <h2>Create a New Election! Separate Candidates with ','</h2>
                    <ContractForm contract="GBCVotes" method="createElection" />
                </div>

                <div>
                    <h2>Approve Addresses for voting!</h2>
                    <ContractForm contract="GBCVotes" method="approveMember" />
                </div>
            </div>
        )

    }
}

CreateElection.contextTypes = {
    drizzle: PropTypes.object
}

export default CreateElection;