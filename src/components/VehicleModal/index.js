import React from "react";
import VehicleDetail from "../VehicleDetail";
import { useUiContext } from "../../contexts/UIContext";
import "./style.scss";

const VehicleModal = ({ vehicles }) => {
    const { showVehicle, setShowModal } = useUiContext();
    const vehicle = vehicles.find((v) => v.id === showVehicle);

    if (!vehicle) return null;

    return (
        <div className="dialog-backdrop">
            <div tabIndex="0" />
            <div
                role="dialog"
                aria-labelledby="dialog_label"
                aria-modal="true"
                className="dialog"
            >
                <button
                    onClick={() => setShowModal(false)}
                    role="button"
                    aria-label="Close"
                    title='Close'
                    className="close_button"
                />

                <VehicleDetail
                    title={vehicle.id}
                    description={vehicle.description}
                    price={vehicle.price}
                    imageMobile={vehicle.media[1].url}
                    imageDesktop={vehicle.media[0].url}
                    modelYear={vehicle.modelYear}
                    meta={vehicle.meta}
                />
            </div>
            <div tabIndex="0" />
        </div>
    );
};

export default VehicleModal;
