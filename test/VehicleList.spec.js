import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'
import VehicleList from "../src/components/VehicleList/VehicleList";
import Vehicle from "../src/components/Vehicle/Vehicle";

const mockedVehicles = [
    {
        id: "xe",
        modelYear: "k17",
        url: "/api/vehicle/xe",
        media: [
            {
                name: "vehicle",
                url: "/images/xe_k17.jpg"
            }
        ],
        detail: {
            id: "xe",
            description: "The most advanced, efficient and refined sports saloon that Jaguar has ever produced",
            price: "£30,000",
            meta: {
                passengers: 5,
                drivetrain: [
                    "AWD",
                    "RWD"
                ],
                bodystyles: [
                    "saloon"
                ],
                emissions: {
                    template: "CO2 Emissions $value g/km",
                    value: 99
                }
            }
        }
    },
];

describe('<VehicleList />', () => {
    it('should display a items list', () => {
        let component = shallow(<VehicleList vehicles={mockedVehicles}/>);

        expect(component.find('Vehicle')).to.have.lengthOf(mockedVehicles.length);
    });

    it('should display a error message', () => {
        let component = shallow(<VehicleList vehicles={[]}/>);

        expect(component.find('Error')).to.have.lengthOf(1);
    });
});
