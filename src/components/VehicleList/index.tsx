import React from "react";
import useData from "../../hooks/useData";
import Vehicle from "../Vehicle";

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
    <div data-testid="results">
      <Vehicle />
    </div>
  );
}
