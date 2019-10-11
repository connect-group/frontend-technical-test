import React, { Component } from 'react';
import { getData, getVehicleDetails } from '../api';
import VehicleListItem from './VehicleListItem';

export default
	class VehicleList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			vehiclesList: null
		}
	}

	componentDidMount() {
		this.getVehicleListWithDetails();
	};

	getVehicleList() {
		return new Promise(resolve =>
			getData((data) => resolve(data.vehicles))
		);
	}

	getVehicleDetails(id) {
		return new Promise(resolve => {
			getVehicleDetails(id, (data) => resolve(data));
		})
	}

	getVehicleListWithDetails() {
		let promises = [];

		this.getVehicleList().then(vehicles => {
			if (vehicles && vehicles.length > 0) {
				vehicles.forEach(vehicle => {
					promises.push(this.getVehicleDetails(vehicle.id))
				})

				Promise.all(promises)
					.then(vehiclesDetails => {
						vehicles.map((vehicle) => {
							const index = vehiclesDetails.findIndex(vehicleDetail => vehicleDetail.id === vehicle.id);

							if (index !== -1) {
								vehicle.details = Object.assign({}, vehiclesDetails[index]);
							}
							return vehicle;
							// spread operator didn't work here for some reason. I was aiming for:
							// return { ...vehicle, details: vehiclesDetails[index] }; 
						})

						this.setState({
							vehiclesList: vehicles
						})
					});
			}
		})
	};

	render() {
		if (this.state.vehiclesList) {
			return (
				<div className="container">
					<div className="main-panel">
						<h1 className="app-title">Vehicles</h1>
						{this.state.vehiclesList.length > 0 ?
							this.state.vehiclesList.map((vehicle, index) =>
								<VehicleListItem vehicle={vehicle} key={index} />
							)
							: "No vehicles found."
						}
					</div>
				</div>
			)
		}

		return (<h1>Loading...</h1>);
	}
}