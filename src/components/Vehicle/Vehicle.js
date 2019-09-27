import React from 'react';
import { Content, Image, VehicleContainer } from "../Components";

export default class Vehicle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        };

        setTimeout(_ => {
            this.setState({isLoading: false});
        }, 1000)
    }

    render() {
        const {vehicle} = this.props;
        const {isLoading} = this.state;

        if (isLoading)
            return <div key={vehicle.id}>Loading...</div>;

        return (
            <VehicleContainer>
                <Image/>
                <Content>
                    teste
                </Content>
            </VehicleContainer>
        );
    }
};
