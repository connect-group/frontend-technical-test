import React from 'react';
import {render} from '@testing-library/react';
import Vehicle from '..';

const mockVehicle = {
    id: "xe",
    modelYear: "k17",
    description: "Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.",
    price: "£30,000",
    apiUrl: "/api/vehicles/xe",
    media: [{name: "vehicle", url: "/images/16x9/xe_k17.jpg"}, {
        name: "vehicle",
        url: "/images/1x1/xe_k17.jpg"
    }]
};

const mockVehicleNoPrice = {
    ...mockVehicle,
    price: null
};

describe('<Vehicle /> Tests', () => {

    it('should render vehicle name', () => {
        const {queryByTestId} = render(<Vehicle data={mockVehicle}/>);

        expect(queryByTestId('vehicle-name')).not.toBeNull();
        expect(queryByTestId('vehicle-name').innerHTML).toBe(mockVehicle.id);
    });

    it('should render vehicle price', () => {
        const {queryByTestId} = render(<Vehicle data={mockVehicle}/>);

        expect(queryByTestId('vehicle-price')).not.toBeNull();
        expect(queryByTestId('vehicle-price').innerHTML).toBe(`From: ${mockVehicle.price}`);
    });

    it('should render vehicle description', () => {
        const {queryByTestId} = render(<Vehicle data={mockVehicle}/>);

        expect(queryByTestId('vehicle-description')).not.toBeNull();
        expect(queryByTestId('vehicle-description').innerHTML).toBe(mockVehicle.description);
    });

    it('should show the vehicle image', () => {
        const {queryByTestId} = render(<Vehicle data={mockVehicle}/>);

        expect(queryByTestId('vehicle-image')).not.toBeNull();
        expect(queryByTestId('vehicle-image').querySelector('img').src).toContain(mockVehicle.media[1].url);
    });

    it('should hide price if not set', () => {
        const {queryByTestId} = render(<Vehicle data={mockVehicleNoPrice}/>);

        expect(queryByTestId('vehicle-price')).toBeNull();
    });
});
