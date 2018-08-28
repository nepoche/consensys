import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AccountData } from 'drizzle-react-components'

import * as routes from "../constants/routes";
import LogoutButton from './LogoutButton';

class NavigationBar extends Component {

    render() {
        return (
            <div>
                { this.props.authUser === "" ? <NavigationNonAuth /> : <NavigationAuth />}
                <div>
                    <h2>Here is your Ethereum Account Information!</h2>
                    <AccountData accountIndex="0" units="ether" precision="3" />
                </div>
            </div>
        );
    }
}

const NavigationAuth = () => (
    <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><LogoutButton /></li>
    </ul>
)

const NavigationNonAuth = () => (
    <ul>
        <li><Link to={routes.LOGIN}>Login</Link></li>
    </ul>
)

const mapStateToProps = (state) => {
    return { authUser: state.loginReducer };
};

export default connect(mapStateToProps)(NavigationBar);