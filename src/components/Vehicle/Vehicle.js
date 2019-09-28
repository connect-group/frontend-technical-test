import React from 'react';
import { Container } from "./styles";

const Vehicle = (props) => {
    const {vehicle} = props;

    return (
        <Container>
            <div className='cover'><img alt={vehicle.media[0].name} src={vehicle.media[0].url}/></div>
            <div className='content'>
                <span className='content__name'>{vehicle.media[0].name}</span>
                <div className='content__text'>From {vehicle.detail.price}</div>
                <div className='content__text'>{vehicle.detail.description}</div>
            </div>
        </Container>
    );
};

export default Vehicle;
