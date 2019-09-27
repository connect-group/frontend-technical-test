import config from './config';

const VehiclesApiClient = {
    getAll: _ => config.get('api/vehicles'),
    getOne: params => config.get(`api/vehicles/${params.id}`)
};

export default VehiclesApiClient;
