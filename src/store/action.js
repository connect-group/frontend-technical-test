import { FETCH_VEHICLES } from "./types";
import VehiclesApiClient from "../api/ApiClient";
import axios from 'axios';

const getVehicles = () => {
    return dispatch => {
        VehiclesApiClient.getAll()
            .then(response => {
                const {vehicles} = response.data;

                const requests = vehicles.map(vehicle => {
                    return VehiclesApiClient.getOne({id: vehicle.id});
                });

                axios.all(requests).then(response => {
                    response.map(item => {
                        const vehicle = vehicles.find(vehicle => item.data.id === vehicle.id);
                        vehicle.detail = item.data;
                    });

                    dispatch({
                        type: FETCH_VEHICLES,
                        payload: vehicles
                    })
                });
            })
    }
};

export {
    getVehicles,
}
