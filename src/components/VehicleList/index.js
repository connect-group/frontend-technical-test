import React from 'react';
import { useSelector } from 'react-redux';
import useData from './useData';
import VehicleSingle from '../VehicleSingle';
import VehicleModal from '../VehicleModal';
import './style.scss';

export default function VehicleList() {
  const visibleModal = useSelector((state) => state.visibleModal);
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading" className="loading">Loading...</div>;
  }

  if (error) {
    return <div data-testid="error" className="error">{ error }</div>;
  }

  return (
    <>
      <div data-testid="results" className="VehicleList">
        {vehicles.map((vehicle, i) => (
          <VehicleSingle
            key={vehicle.id}
            index={i}
            data={vehicle}
            delay={500}
            duration={500}
          />
        ))}
      </div>

      {visibleModal && <VehicleModal />}
    </>
  );
}
