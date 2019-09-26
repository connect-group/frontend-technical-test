import React, { Component } from 'react';
import { getData } from '../../api';
import VehicleListItem from './VehicleListItem';

export default class VehicleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    getData(data => {
      this.setState({
        data
      });
    });
  }

  render() {
    if (this.state.data) {
      return (
        <div className='wrapper-div'>
          <main>
            {this.state.data.vehicles.map(v => (
              <VehicleListItem vehicle={v} />
            ))}
          </main>
        </div>
      );
    }

    return <h1>Loading...</h1>;
  }
}
