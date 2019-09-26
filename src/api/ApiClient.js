import config from './config';

const VehiclesApiClient = {
    getAll: params => config.get('api/vehicles'),
    get: params => config.get(`api/vehicles/${params.id}`)
};

export default VehiclesApiClient;
