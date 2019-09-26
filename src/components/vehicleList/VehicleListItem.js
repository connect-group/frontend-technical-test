import React, { Component } from 'react';
import { getDataDetails } from '../../api';
import VehicleListItemDetails from './VehicleListItemDetails';

export default class VehicleListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleDetails: null
    };
    this.renderVehicleDetails.bind(this.renderVehicleDetails);
  }

  componentDidMount() {
    getDataDetails(data => {
      this.setState({
        vehicleDetails: data
      });
    }, this.props.vehicle.id);
  }

  renderVehicleDetails() {
    if (this.state.vehicleDetails) {
      return (
        <VehicleListItemDetails
          vehicle={this.props.vehicle}
          vehicleDetails={this.state.vehicleDetails}
        />
      );
    }

    return <h1>Loading...</h1>;
  }

  render() {
    const vehicle = this.props.vehicle;
    if (vehicle) {
      return (
        <div className='list-item'>
          <a href={vehicle.url} target='_blank'>
            <img className='img-size' src={vehicle.media[0].url} />
          </a>

          {this.renderVehicleDetails()}
        </div>
      );
    }

    return <h1>Loading...</h1>;
  }
}
