import { useState, useEffect } from 'react';
import getData from '../../api';

export default function useData() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  function removeVehicle(vehicle, reason) {
    // eslint-disable-next-line no-console
    console.log('💥', `Removing vehicle because '${reason}'`, vehicle);
    setVehicles((currentVehicles) => currentVehicles.filter((v) => v.id !== vehicle.id));
  }

  async function fetchVehicleDetails(vehicle) {
    try {
      const { apiUrl, id } = vehicle;
      const details = await getData(apiUrl);
      // eslint-disable-next-line no-console
      console.log('📊', details);
      if (details && details.price) {
        // eslint-disable-next-line no-console
        console.log('🇨🇭', 'Adding details');
        setVehicles((currentVehicles) => currentVehicles.map((v) => (v.id === id ? { ...v, details } : v)));
      } else {
        // If there's no price, remove the vehicle from the state
        // eslint-disable-next-line no-console
        removeVehicle(vehicle, 'No price');
      }
    } catch (err) {
      // We don't wait to use `setError` here because NOT getting details isn't
      // critical, it just means we don't have details. Sad times.
      // eslint-disable-next-line no-console
      console.error(err.toString());
      removeVehicle(vehicle, 'Error fetching vehicle details');
    }
  }

  async function fetchVehiclesData() {
    setLoading(true);
    try {
      const vehiclesData = await getData('/api/vehicles.json');
      // Filter out vehicles with no apiUrl
      const validVehiclesData = vehiclesData.filter((v) => v.apiUrl);
      setVehicles(validVehiclesData);
      validVehiclesData.forEach((v) => fetchVehicleDetails(v));
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
