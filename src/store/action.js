import { FETCH_VEHICLES } from "./types";
import VehiclesApiClient from "../api/ApiClient";
import axios from 'axios';

const getVehicles = () => {
    return async dispatch => {
        const {data} = await VehiclesApiClient.getAll();
        const {vehicles} = data;

        const requests = vehicles.map(vehicle => {
            return VehiclesApiClient.getOne({id: vehicle.id});
        });

        const response = await axios.all(requests);

        response.map(item => {
            const vehicle = vehicles.find(vehicle => item.data.id === vehicle.id);
            vehicle.detail = item.data;
        });

        dispatch({
            type: FETCH_VEHICLES,
            payload: vehicles
        })
    }
};

export {
    getVehicles,
}
