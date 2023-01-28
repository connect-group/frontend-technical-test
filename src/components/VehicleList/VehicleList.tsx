import React from "react";
import { Vehicle, VehicleSpinner } from "@components";
import { useData } from "@hooks";
import styles from "./VehicleList.module.scss";

export default function VehicleList() {
  const { loading, error, vehicles } = useData();

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
    <main data-testid="results" className={styles.container}>
      {vehicles
        .filter((x) => !!x)
        .map((vehicle) => (
          <Vehicle key={vehicle.id} {...vehicle} />
        ))}
    </main>
  );
}
