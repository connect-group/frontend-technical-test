import React, { Component } from 'react';
import Vehicle from "../Vehicle/Vehicle";
import { Container } from "../Components";
import { connect } from 'react-redux'
import { getVehicles } from "../../store/action";

class VehicleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicles: [],
            error: null,
        };
    }

    componentDidMount() {
        const {getVehicles, vehicles} = this.props;

        this.setState({vehicles});

        getVehicles();
    }

    renderContent() {
        const {error, vehicles} = this.state;

        if (error) {
            return <h1>Error</h1>;
        }

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
    getVehicles
})(VehicleList)
