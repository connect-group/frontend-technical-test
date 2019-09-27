import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getVehicles } from "../../store/action";
import { Container } from "./styles";
import Vehicle from "../Vehicle/Vehicle";

class VehicleList extends Component {
    componentDidMount() {
        const {getVehicles} = this.props;

        getVehicles();
    }

    renderContent() {
        const {vehicles} = this.props;

        if (!vehicles.length) {
            return <h1>Não há veículos para exibição</h1>;
        }

        return vehicles.map(vehicle => <Vehicle key={vehicle.id} vehicle={vehicle}/>);
    }

    render() {
        return (
            <Container>
                {this.renderContent()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        vehicles: state.vehiclesReducer
    }
};

export default connect(mapStateToProps, {
    getVehicles,
})(VehicleList)
