import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QRPets from './QRPets';
import PageNotFound from './components/PageNotFound';
import './App.css';

export default () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={QRPets} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </div>
);
