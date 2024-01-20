import React from "react";
import useVehiclesStore from "../../store/vehicles-store";
import { vehicleDetailsSelector } from "../../store/vehicles-store/selectors/vehicle-details-selector";

const Details: React.FC = () => {
    const details = useVehiclesStore(vehicleDetailsSelector);
    return (
        <div className="vehicle-detail__details">
            {details.map(({ label, value }, index) => {
                return (
                    <div className="vehicle-detail__detail" key={index}>
                        <span className="vehicle-detail__label">{label}:</span>
                        {value}
                    </div>
                );
            })}
        </div>
    );
};
export default Details;
