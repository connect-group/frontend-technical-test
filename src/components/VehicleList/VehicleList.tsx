import React from "react";
import { Vehicle } from "@components/Vehicle";
import useData from "@hooks/useData";
import styles from "./VehicleList.module.scss";

export default function VehicleList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  return (
    <div data-testid="results" className={styles.container}>
      <Vehicle />
      <Vehicle />
      <Vehicle />
      <Vehicle />
    </div>
  );
}
