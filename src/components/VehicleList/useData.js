import { useState, useEffect } from 'react';
import getData from '../../api';

export default function useData() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function fetchVehiclesData() {
    setLoading(true);
    try {
      const vehicleData = await getData('/api/vehicles.json');
      setVehicles(vehicleData);

      vehicleData.forEach((vehicle) => {
        // eslint-disable-next-line no-console
        console.log(vehicle);
      });
    } catch (err) {
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => fetchVehiclesData(), []);

  return {
    loading,
    error,
    vehicles,
  };
}
