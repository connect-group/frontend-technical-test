import React, { Component } from 'react';
import { getData } from '../api';
import { Card } from './card/Card';
import { Details } from './card/Details';

export default class VehicleList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		}
	}

	async componentDidMount() {
		this.setState({
			data: await getData()
		});
	}

	render() {
		const data = this.state.data;
		if (data) {
			const { vehicles } = data;
			return (
				<div>
					{
						<div className='container'>
							<ul className="card">
								{vehicles.map(vehicle => <Card key={vehicle.id} vehicle={vehicle} />)}
							</ul>
						</div>
					}
				</div>
			)
		}

		return (<h1>Loading...</h1>);
	}
}