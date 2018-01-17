import React, { Component } from 'react';
import RestClient from '../lib/RestClient';
import { config } from '../config';
import { VehicleList } from './VehicleList';
import { Loading } from './Loading';
import { ErrorMessage } from './ErrorMessage';

class Vehicles extends Component {
  constructor (props) {
    super(props);

    const { server, api } = config;

    this.restClient = new RestClient();
    this.apiUrl = `${server.url}:${server.port}${api.baseRoute}${api.vehiclesRoute}`;

    this.state = {
      vehicles: [],
      hasErrored: false,
      isLoading: true
    }
  }

  componentDidMount () {
    this.fetchData().then(response => this.fetchVehicleData(response.vehicles));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isLoading !== this.state.isLoading || nextState.hasErrored !== this.state.hasErrored
  }

  fetchVehicleData (vehicles = [], callback) {
    let mergedVehicles = [];

    // @NOTE: This api is not good enough for production. All the data should be in 1 call
    vehicles.forEach((vehicle, index) =>
      this.fetchData(vehicle.id).then(response => {
        mergedVehicles.push(Object.assign(vehicle, response));

        if ((index + 1) === vehicles.length) {
          this.setState({
            vehicles: mergedVehicles,
            isLoading: false
          }, () => callback && callback());
        }
      })
    );
  }

  async fetchData (id) {
    try {
      const response = await this.restClient.get({ url: `${this.apiUrl}${id ? `/${id}` : ''}` })
      return response.body;
    } catch (error) {
      this.setState({
        hasErrored: true,
        errorMessage: error.message
      });
    }
  }

  render() {
    const { isLoading, hasErrored, vehicles } = this.state;

    return (
      <div>
        {isLoading
          ? <Loading />
          : hasErrored
            ? <ErrorMessage message="Please try again..." />
            : <VehicleList vehiclesData={vehicles} />
        }
      </div>
    );
  }
}

export { Vehicles };
