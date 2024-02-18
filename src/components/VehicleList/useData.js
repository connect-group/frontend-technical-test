import { useState, useEffect } from 'react';
import getData from '../../api';

export default function useData() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await getData();

        if (isMounted) {
          setVehicles(response);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'An error occurred while fetching data.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Ensure cleanup if the component is unmounted
    };
  }, []);

  return [loading, error, vehicles];
}
