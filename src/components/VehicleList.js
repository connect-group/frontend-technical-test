import React, { Component } from 'react';
import { getData } from '../api';

export default
class VehicleList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}
	}

	componentDidMount() {
		getData((data) => {
			this.setState({
				data
			})
		});
	}

	render() {
		if(this.state.data) {
			console.log(this.state.data);
		    return (
			    <h1>Hello World</h1>
		    )
	    }

		return (<h1>Loading...</h1>);
	}
}