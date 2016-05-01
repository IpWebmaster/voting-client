import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/results" component={Results} />
      <Route path="/" component={Voting} />
    </Route>
  </Router>,
  document.getElementById('app')
);
