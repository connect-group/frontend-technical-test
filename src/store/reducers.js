import { combineReducers } from 'redux';
import { GET_VEHICLES_DETAIL_TYPE, GET_VEHICLES_TYPE } from "./types";

export const vehiclesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_VEHICLES_TYPE:
            return [...action.payload];
        case GET_VEHICLES_DETAIL_TYPE:
            return {...response.data.vehicle};
        default:
            return state
    }
};

export default combineReducers({
    vehiclesReducer
});
