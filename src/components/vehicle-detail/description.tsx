import React from "react";
import useVehiclesStore from "../../store/vehicles-store";
import { vehicleDescriptionSelector } from "../../store/vehicles-store/selectors/vehicle-description-selector";
const Description: React.FC = () => {
    const description = useVehiclesStore(vehicleDescriptionSelector);
    return <p className="vehicle-detail__description">{description}</p>;
};
export default Description;
