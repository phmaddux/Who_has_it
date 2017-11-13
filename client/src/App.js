import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/SignUp.js'
// import LogIn from './components/LogIn.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>NAVBAR!</h1>
          <h2>'Who has it? A service for users to help keep track of their belongings when they have been loaned out, and whether or not they should lend something to that friend again.</h2>
          <h4>Sign in if you already have a profile!</h4>
          <h4>or</h4>
          <h4>Join us if you don't!</h4>
          <h3>Because let's face it, life is better when you know where all your stuff is.'</h3>
          <span>
              <SignUp />
              {/* <LogIn />      */}
          </span>
          <Router>
            <Switch>
              <Route exact path="/"/>
              {/* <Route exact path="/users/:userId" component={Profile} />
              <Route exact path="/users/:userId/people" component={WhoHasIt} />
              <Route exact path="/users/:userId/people/:personId" component={ExactlyWhoHasIt} />
              <Route exact path="/users/:userId/people/personId/items" component={WhatDidILend} /> */}
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;


