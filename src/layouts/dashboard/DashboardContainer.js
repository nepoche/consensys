import Dashboard from './Dashboard';
import { drizzleConnect } from 'drizzle-react';

const mapStateToProps = state => {
    return {
        GBCVotes: state.contracts.GBCVotes,
        drizzleStatus: state.drizzleStatus
    }
}

const DashboardContainer = drizzleConnect(Dashboard, mapStateToProps);

export default DashboardContainer;
