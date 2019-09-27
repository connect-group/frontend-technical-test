import React from 'react';
import { VehicleContainer } from "./styles";
import { baseURL } from "../../api/config";

const Vehicle = (props) => {
    const {vehicle} = props;
    console.log('vehicle', vehicle);

    return (
        <VehicleContainer>
            <img alt={vehicle.media[0].name} src={vehicle.media[0].url}/>
            <div>
                <span>{vehicle.media[0].name}</span>
                <span>{vehicle.detail.description}</span>
            </div>
        </VehicleContainer>
    );
};

export default Vehicle;
