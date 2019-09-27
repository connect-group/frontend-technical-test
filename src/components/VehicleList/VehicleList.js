import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getVehicleDetail, getVehicles } from "../../store/action";
import { Container } from "./Container";

class VehicleList extends Component {
    componentDidMount() {
        const {getVehicles} = this.props;

        getVehicles();
    }

    renderContent() {
        const {vehicles, getVehicleDetail} = this.props;

        if (!vehicles.length) {
            return <h1>Não há veículos para exibição</h1>;
        }

        vehicles.map(vehicle => {
            getVehicleDetail(vehicle.id)
        });

        return (<div>

        </div>);
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
    getVehicleDetail
})(VehicleList)
