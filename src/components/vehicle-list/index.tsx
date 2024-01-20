import React from "react";
import useData from "./useData";
import Title from "../title";
import Vehicle from "../vehicle";
import "./style.scss";
import VehicleDetail from "../vehicle-detail";

export default function VehicleList() {
    const [loading, error, vehicles] = useData();

    if (loading) return <div data-testid="loading">Loading</div>;
    if (error) return <div data-testid="error">{error}</div>;

    return (
        <>
            <div className="main">
                <Title>Vehicles List</Title>
                <div data-testid="results" className="vehicles">
                    {vehicles &&
                        vehicles.map((vehicle) => (
                            <Vehicle key={vehicle.id} id={vehicle.id} />
                        ))}
                </div>
            </div>
            <VehicleDetail />
        </>
    );
}
