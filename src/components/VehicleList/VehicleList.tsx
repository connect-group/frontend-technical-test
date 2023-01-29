import React, { useState } from "react";
import { MergedVehicleDetails } from "@types";
import { Vehicle, VehicleSpinner } from "@components";
import { Modal } from "@components/Modal";
import { VehicleModal } from "@components/VehicleModal";
import { useData } from "@hooks";
import styles from "./VehicleList.module.scss";

export default function VehicleList() {
  const { loading, error, vehicles } = useData();
  const [selectedVehicle, setSelectedVehicle] =
    useState<MergedVehicleDetails>();

  if (loading) {
    return (
      <div className={styles.loading} data-testid="loading">
        <VehicleSpinner />
      </div>
    );
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  if (!vehicles?.length) {
    return (
      <div data-testid="nodata">
        Sorry, there is no data available to display.
      </div>
    );
  }

  return (
    <>
      <main data-testid="results" className={styles.container}>
        {vehicles
          .filter((x) => !!x)
          .map((vehicle) => (
            <Vehicle
              key={vehicle.id}
              vehicle={vehicle}
              onClick={setSelectedVehicle}
            />
          ))}
      </main>

      <Modal
        isOpen={!!selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      >
        <VehicleModal vehicle={selectedVehicle} />
      </Modal>
    </>
  );
}
