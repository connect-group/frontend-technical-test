import React from "react";
import { useUiContext } from "../../contexts/UIContext";
import VehicleDetail from "../VehicleDetail";
import VehicleModal from "../VehicleModal";
import useData from "./useData";
import "./style.scss";

export default function VehicleList() {
    const [loading, error, vehicles] = useData();
    const { showModal } = useUiContext();

    if (loading)
        return (
            <div
                className="loading"
                aria-live="polite"
                aria-label="Loading. Do not refresh the page"
                data-testid="loading"
            />
        );
    if (error) return <div data-testid="error">{error}</div>;

    return (
        <React.Fragment>
            <ul data-testid="results" className="vehicle-list">
                {vehicles.map((v) => (
                    <VehicleDetail
                        key={v.id}
                        title={v.id}
                        description={v.description}
                        price={v.price}
                        imageMobile={v.media[1].url}
                        imageDesktop={v.media[0].url}
                        url={v.apiUrl}
                    />
                ))}
            </ul>
            {showModal && <VehicleModal vehicles={vehicles} />}
        </React.Fragment>
    );
}
