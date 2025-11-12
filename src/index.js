// ! Ensure these styles are loaded first
import './global-styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import VehicleList from './components/VehicleList';

ReactDOM.render(
  <React.StrictMode>
    <VehicleList />
  </React.StrictMode>,
  document.querySelector('.root')
);
