import React from 'react';
import ReactDOM from 'react-dom';
import VehicleList from './components/VehicleList';
import { ModalContextProvider } from './contexts/ModalContext';
import './global-styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <VehicleList />
    </ModalContextProvider>
  </React.StrictMode>,
  document.querySelector('.root')
);
