import { useState, useEffect } from 'react';
import { TVehicle } from '../../@typings/vehicle';
import getData from '../../api';
import useVehiclesStore from '../../store/vehicles-store';

export default function useData(): [boolean, string | null, Array<TVehicle> | undefined] {
  const setVehicles = useVehiclesStore(s => s.setVehicles);
  const vehicles = useVehiclesStore(s => s.vehicles);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData()
      .then((response) => setVehicles(response))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [
    loading,
    error,
    vehicles,
  ];
}
