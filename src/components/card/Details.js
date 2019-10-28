import React, { Component } from 'react';
import { getData } from '../../api';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  async componentDidMount() {
    this.setState({
      data: await getData(this.props.id)
    });
  }

  render() {
    const data = this.state.data
    if (data) {
      const { price, description } = data;
      return (
        <div className="card-detail">
          <h1 className="card-detail__price">
            {price}
          </h1>
          <h2 className="card-detail__description">
            {description}
          </h2>
        </div>
      )
    }

    return (<h1>Loading details...</h1>);
  }
}
