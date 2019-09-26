import React from 'react';

export default class VehicleDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {vehicle} = this.props;

        return <div key={vehicle.id}>Teste</div>;
    }
};
