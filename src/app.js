import React from 'react';
import { render } from 'react-dom';
import VehicleList from './components/VehicleList/VehicleList';
import { Provider } from "react-redux";
import reducers from "./store/reducers"
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <VehicleList/>
    </Provider>,
    document.getElementById('app')
);
