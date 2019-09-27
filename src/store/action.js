import { GET_VEHICLES_TYPE, GET_VEHICLES_DETAIL_TYPE } from "./types";
import VehiclesApiClient from "../api/ApiClient";

const getVehicles = async () => {
    let response = [];

    await VehiclesApiClient.getAll();

    return {
        type: GET_VEHICLES_TYPE,
        payload: []
    }
};

const getVehicleDetail = (id) => {
    VehiclesApiClient.get({id})
        .then(pa => {

        });

    return {
        type: GET_VEHICLES_DETAIL_TYPE,
        payload: {}
    }
};

export {
    getVehicles,
    getVehicleDetail
}
