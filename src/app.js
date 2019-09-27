import React from 'react';
import { render } from 'react-dom';
import VehicleList from './components/VehicleList/VehicleList';
import { Provider } from "react-redux";
import reducers from "./store/reducers"
import { createStore } from "redux";

render(
    <Provider store={createStore(reducers)}>
        <VehicleList/>
    </Provider>,
    document.getElementById('app')
);
