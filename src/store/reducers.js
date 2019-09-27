import { combineReducers } from 'redux';
import { FETCH_VEHICLES_DETAIL, FETCH_VEHICLES } from "./types";

export const vehiclesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_VEHICLES:
            return [...action.payload];
        case FETCH_VEHICLES_DETAIL:
            console.log('action', action);
            return [...state].map(item => {
                console.log('item', item);
                if (item.id === action.payload.id) {
                    item.detail = action.payload;
                }
                return {item};
            });
        default:
            return state
    }
};

export default combineReducers({
    vehiclesReducer
});
