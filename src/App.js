import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation.js';
import FormPage from './FormPage.js';
import Report from './Report.js';
import Home from './Home.js';

class App extends Component {


  render() {
    return (
      <div>

        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sales/form" component={FormPage} />
            <Route path="/sales/report" component={Report} />
          </Switch>
        </Router>

      </div>
    )
  }
}
export default App;
