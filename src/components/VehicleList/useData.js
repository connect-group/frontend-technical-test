import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getData from '../../api';
import { setVihiclesAction } from '../../redux/actions';

export default function useData() {
  const dispatch = useDispatch();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getData()
      .then((response) => {
        setVehicles(response);
        dispatch(setVihiclesAction(response));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return [
    loading,
    error,
    vehicles,
  ];
}
