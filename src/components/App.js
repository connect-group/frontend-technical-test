import React, { Component } from 'react';
import { connect } from 'react-redux'
import VehicleList from "./VehicleList/VehicleList";
import { getVehicles } from "../store/action";

class App extends Component {
    componentDidMount() {
        const {getVehicles} = this.props;

        getVehicles();
    }

    render() {
        const {vehicles} = this.props;

        return <VehicleList vehicles={vehicles}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        vehicles: state.vehiclesReducer
    }
};

export default connect(mapStateToProps, {
    getVehicles,
})(App)
