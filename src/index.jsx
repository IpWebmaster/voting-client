import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspottin', '28 Days Later'];

ReactDOM.render(
  <Voting pair={pair} hasVoted="Trainspotting" winner="Trainspotting" />,
  document.getElementById('app')
);