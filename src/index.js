import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import VehicleList from './components/VehicleList';
import { store } from './redux';
import './global-styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <VehicleList />
    </React.StrictMode>
  </Provider>,
  document.querySelector('.root')
);
