import React from 'react';
import VehiclesApiClient from '../api/ApiClient';
import VehicleDetail from "./VehicleDetail";

export default class VehicleList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicles: [],
            error: null
        };
    }

    componentDidMount() {
        VehiclesApiClient.getAll()
            .then(response => this.setState({vehicles: response.data.vehicles}))
            .catch(error => this.setState({error}));
    }

    renderContent() {
        const {error, vehicles} = this.state;

        if (error) {
            return <h1>Error</h1>;
        }

        if (!vehicles.length) {
            return <h1>Não há veículos para exibição</h1>;
        }

        return vehicles.map(vehicle => <VehicleDetail vehicle={vehicle}/>);
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
