import React, { Component } from 'react';
import { getVehiclesData } from '../api';
import Vehicle from './Vehicle';

export default
	class VehicleList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			vehicles: null
		}
	}

	componentDidMount() {
		getVehiclesData((json) => {
			let obj = JSON.parse(json);

			this.setState({
				vehicles: obj.vehicles ? obj.vehicles : []
			})
		});
	}

	render() {
		if (this.state.vehicles != null) {
			let vehicles = this.state.vehicles.map(vehicle => {
				return <Vehicle key={`vehicle_${vehicle.id}`} vehicle={vehicle} />;
			});
			
			return <div className="vehicles row">
				{vehicles}
			</div>;
		}

		return (<h1>Loading...</h1>);
	}
}