export const mockVehiclesDetailedList = [
  {
    id: 'vehicle-1',
    price: '£35,000',
    description: 'A reliable family car',
    apiUrl: '"/api/vehicle_fp.json"',
    media: [
      {
        url: '"/api/vehicle_fp.json"',
        name: 'Vehicle 1'
      }
    ]
  },
  {
    id: 'vehicle-2',
    price: '£45,000',
    description: 'A luxury sedan',
    apiUrl: '"/api/vehicle_ft.json"',
    media: [
      {
        url: '"/api/vehicle_ft.json"',
        name: 'Vehicle 2'
      }
    ]
  }
];

export const mockVehicleDetails = {
  id: 'fpace',
  description: 'description of the vehicle.',
  price: '£40,000',
  meta: {
    passengers: 5,
    drivetrain: ['AWD', 'RWD'],
    bodystyles: ['SUV'],
    emissions: {
      template: 'CO2 Emissions $value g/km',
      value: 100
    }
  }
};
