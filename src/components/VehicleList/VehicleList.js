import React from 'react';
import Vehicle from "../Vehicle/Vehicle";
import { Container } from "./styles";
import Error from "../Error/Error";

const VehicleList = props => {
    const {vehicles} = props;

    if (!vehicles.length) {
        return <Error/>;
    }

    return (
        <Container>
            {vehicles.map(vehicle => <Vehicle key={vehicle.id} vehicle={vehicle}/>)}
        </Container>
    );
};

export default VehicleList;
