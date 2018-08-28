import CreateElection from './CreateElection';
import { drizzleConnect } from 'drizzle-react';

const mapStateToProps = state => {
    return {
        GBCVotes: state.contracts.GBCVotes,
        drizzleStatus: state.drizzleStatus
    }
}

const CreateElectionContainer = drizzleConnect(CreateElection, mapStateToProps);

export default CreateElectionContainer;
