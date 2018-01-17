import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Vehicles } from './components/Vehicles';

render(<Vehicles />, document.getElementById('app'));
