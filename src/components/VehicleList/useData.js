import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehicles, selectVehicles } from '../../store/slices/vehicleSlice';

export default function useData() {
  const dispatch = useDispatch();
  const { loading, error, vehicles } = useSelector(selectVehicles);
  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  return [
    loading,
    error,
    vehicles,
  ];
}
