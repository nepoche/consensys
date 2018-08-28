import React, { Component } from 'react'
import { Route } from 'react-router'
import HomeContainer from './layouts/home/HomeContainer'
import * as routes from "./constants/routes";
import LoginPage from "./layouts/login/Login";
import LandingPage from "./layouts/landing/Landing";
// import { RegisterPage } from "./layouts/register";
// import { ForgotPasswordPage } from "./layouts/forgotPassword";

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import NavigationBar from './components/NavigationBar';
import CreateElectionContainer from './layouts/admin/CreateElectionContainer';
import DashboardContainer from './layouts/dashboard/DashboardContainer';

class App extends Component {

  render() {

    return (
      <div className="App">

        <NavigationBar />
        {/* <Route exact path="/" component={HomeContainer}/> */}

        <Route
          exact path={routes.HOME}
          component={HomeContainer}
        />

        {/* <Route
          exact path={routes.REGISTER}
          component={RegisterPage}
        /> */}

        <Route
          exact path={routes.LOGIN}
          component={LoginPage}
        />

        <Route
          exact path={routes.LANDING}
          component={LandingPage}
        />

        <Route
          exact path={routes.ADMIN}
          component={CreateElectionContainer}
        />
        
        <Route
          exact path={routes.DASHBOARD}
          component={DashboardContainer}
        />
        {/* <Route
          exact path={routes.ACCOUNT}
          component={AccountPage}
        />

        <Route
          exact path={routes.FORGOT_PASSWORD}
          component={ForgotPasswordPage}
        /> */}
      </div>
    );
  }
}

export default App
