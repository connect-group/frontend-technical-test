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
      const { price, description, id } = data;
      return (
        <div className="card-detail">
          <h1 className="card-list__name">
            {id}
          </h1>
          <h2 className="card-detail__price">
            {price}
          </h2>
          <h3 className="card-detail__description">
            {description}
          </h3>
        </div>
      )
    }

    return (<h1>Loading details...</h1>);
  }
}
