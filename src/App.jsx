import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPetForm from './components/AdminPetForm';
import QRPets from './QRPets';
import PageNotFound from './components/PageNotFound';
import './App.css';

export default () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/pets/:qrId" component={QRPets} />
        <Route exact path="/admin" component={AdminPetForm} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </div>
);
