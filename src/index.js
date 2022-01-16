import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global-styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.root')
);
