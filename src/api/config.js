import axios from 'axios';

export const baseURL = 'http://localhost:9988';

export default axios.create({
    baseURL: baseURL,
});
