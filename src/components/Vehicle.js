import React, { Component } from 'react';
import { getVehicleData } from '../api';

export default
class Vehicle extends Component {

	constructor(props) {
		super(props);
		
		this.state = {};
	}

	componentDidMount() {
		const vehicle = this.props.vehicle;

		getVehicleData(vehicle.id, json => {
			this.setState({
				vehicleDetails: JSON.parse(json)
			});
		});
	}

	render() {
		const vehicle = this.props.vehicle;
		const vehicleDetails = this.state.vehicleDetails;
		const media = vehicle.media[0];

		return <div className="vehicle col-sm-6 col-md-4 col-lg-3">
			<div className="image" style={{'background-image':`url('./${media.url}')`}}></div>
			<div className="details-container">
				<div className="details">
					<div className="name">
						{media.name}
					</div>
					{
						!vehicleDetails ? <img src="./images/loading.gif" /> :
						<div>
							<div className="price">
								From {vehicleDetails.price}
							</div>
							<div className="description">
								{vehicleDetails.description}
							</div>
						</div>
					}
				</div>
			</div>
		</div>;
	}
}