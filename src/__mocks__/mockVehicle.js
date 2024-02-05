const vehicle = {
  id: 'xe',
  modelYear: 'k17',
  apiUrl: '/api/vehicle_xe.json',
  media: [
    {
      name: 'vehicle',
      url: '/images/16x9/xe_k17.jpg',
    },
    {
      name: 'vehicle',
      url: '/images/1x1/xe_k17.jpg',
    },
  ],
  description:
    'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
  price: '£30,000',
  meta: {
    passengers: 5,
    drivetrain: ['AWD', 'RWD'],
    bodystyles: ['saloon'],
    emissions: {
      template: 'CO2 Emissions $value g/km',
      value: 99,
    },
  },
};

export default vehicle;
