import { FETCH_VEHICLES, FETCH_VEHICLES_DETAIL } from "./types";
import VehiclesApiClient from "../api/ApiClient";

const getVehicles = () => {
    return dispatch => {
        VehiclesApiClient.getAll()
            .then(response => dispatch({
                type: FETCH_VEHICLES,
                payload: response.data.vehicles
            }))
    }
};

const getVehicleDetail = (id) => {
    return dispatch => {
        VehiclesApiClient.getOne({id})
            .then(response => dispatch({
                type: FETCH_VEHICLES_DETAIL,
                payload: response.data
            }))
    }
};

export {
    getVehicleDetail,
    getVehicles,
}
