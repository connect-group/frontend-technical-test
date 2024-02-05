import React from 'react';
import useData from './useData';
import VehicleCard from '../VehicleCard';
import VehicleCardLoader from '../VehicleCard/VehicleCardLoader';
import VehicleCardDetailsModal from '../VehicleCardDetailsModal';

import styles from './styles.module.scss';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentVehicleDetails, setCurrentVehicleDetails] = React.useState(null);

  if (loading) {
    return (
      <div className={styles.vehiclesList}>
        {[0, 1, 2, 3].map((id) => (
          <VehicleCardLoader key={id} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  return (
    <div data-testid="results" className={styles.vehiclesList}>
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          loading={loading}
          onClick={() => {
            setCurrentVehicleDetails(vehicle);
            setIsModalOpen(true);
          }}
        />
      ))}
      {currentVehicleDetails && (
        <VehicleCardDetailsModal
          isOpen={isModalOpen}
          onClose={() => {
            setCurrentVehicleDetails(null);
            setIsModalOpen(false);
          }}
          details={currentVehicleDetails}
        />
      )}
    </div>
  );
}
