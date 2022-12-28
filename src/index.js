import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './components/Context';
import VehicleList from './components/VehicleList';
import './global-styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <VehicleList />
    </Provider>
  </React.StrictMode>,
  document.querySelector('.root')
);
