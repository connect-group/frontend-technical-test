import { useState, useEffect } from 'react';
import getData from '../../api';

export default function useData() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function fetchVehicleDetails(detailUrl, vehicleId) {
    try {
      const details = await getData(detailUrl);
      // eslint-disable-next-line no-console
      console.log('📊', details);
      setVehicles((currentVehicles) => currentVehicles.map((v) => (v.id === vehicleId ? { ...v, details } : v)));
    } catch (err) {
      // We don't wait to use `setError` here because NOT getting details isn't
      // critical, it just means we don't have details. Sad times.
      // eslint-disable-next-line no-console
      console.error(err.toString());
    }
  }

  async function fetchVehiclesData() {
    setLoading(true);
    try {
      const vehicleData = await getData('/api/vehicles.json');
      setVehicles(vehicleData);

      vehicleData.forEach((vehicle) => {
        fetchVehicleDetails(vehicle.apiUrl, vehicle.id);
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
