import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage.js'
import WhoHasIt from './components/WhoHasIt.js'
import YourProfile from './components/YourProfile.js'
import WhatDidILend from './components/WhatDidILend.js'
import WhatDoTheyHave from './components/WhatDoTheyHave.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/users/:userId" component={YourProfile}/>
              <Route exact path="/users/:userId/items" component={WhatDidILend}/>
              <Route exact path="/users/:userId/people" component={WhoHasIt}/>
              <Route exact path="/users/:userId/people/:personId/items" component={WhatDoTheyHave}/>
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;


