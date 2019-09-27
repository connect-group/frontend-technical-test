import React from 'react';
import { VehicleContainer } from "./styles";

const Vehicle = (props) => {
    const {vehicle} = props;

    return (
        <VehicleContainer>
            <div className='cover'><img alt={vehicle.media[0].name} src={vehicle.media[0].url}/></div>
            <div className='content'>
                <span className='content__name'>{vehicle.media[0].name}</span>
                <div className='content__text'>From {vehicle.detail.price}</div>
                <div className='content__text'>{vehicle.detail.description}</div>
            </div>
        </VehicleContainer>
    );
};

export default Vehicle;
