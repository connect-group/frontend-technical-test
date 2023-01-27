import React from "react";
import { Vehicle } from "@components";
import { useData } from "@hooks";
import styles from "./VehicleList.module.scss";

export default function VehicleList() {
  const { isLoading, error, vehicles } = useData();

  if (isLoading) {
    return <div data-testid="loading">Loading</div>;
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
    <div data-testid="results" className={styles.container}>
      {vehicles
        .filter((x) => !!x)
        .map((vehicle) => (
          <Vehicle key={vehicle.id} {...vehicle} />
        ))}
    </div>
  );
}
