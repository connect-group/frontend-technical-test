import React from 'react';
import ReactDOM from 'react-dom';
import VehicleList from './components/VehicleList/VehicleList';
import './global.scss';

ReactDOM.render(
  <React.StrictMode>
    <VehicleList />
  </React.StrictMode>,
  document.querySelector('.root')
);
