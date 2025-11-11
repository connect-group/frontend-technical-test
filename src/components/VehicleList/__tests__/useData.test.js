import { transformToProps } from '../useData';

const responseStub = {
  id: 'xe',
  modelYear: 'k17',
  apiUrl: '/api/vehicle_xe.json',
  media: [
    {
      name: 'vehicle',
      url: '/images/16x9/xe_k17.jpg'
    },
    {
      name: 'vehicle',
      url: '/images/1x1/xe_k17.jpg'
    }
  ],
  description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
  price: '£30,000',
  meta: {
    passengers: 5,
    drivetrain: [
      'AWD',
      'RWD'
    ],
    bodystyles: [
      'saloon'
    ],
    emissions: {
      template: 'CO2 Emissions $value g/km',
      value: 99
    }
  }
};

describe('useData Helper Tests', () => {
  describe('transformToProps Tests', () => {
    it('Should contain basic vehicle information', () => {
      const transformed = transformToProps(responseStub);

      expect(typeof transformed).toBe('object');
      expect(transformed).toHaveProperty('id');
      expect(transformed).toHaveProperty('description');
      expect(transformed).toHaveProperty('modelYear');
      expect(transformed).toHaveProperty('price');
      expect(transformed).toHaveProperty('media');
      expect(Array.isArray(transformed.media)).toBe(true);
      expect(transformed).toHaveProperty('meta');
    });

    it('Should extract vehicle thumbnails', () => {
      const transformed = transformToProps(responseStub);

      expect(transformed).toHaveProperty('thumbnails');
      expect(typeof transformed.thumbnails).toBe('object');
      expect(transformed.thumbnails).toHaveProperty('default');
      expect(transformed.thumbnails).toHaveProperty('mobile');
    });

    it('Should have a vehicle name', () => {
      const transformed = transformToProps(responseStub);

      expect(transformed).toHaveProperty('name');
      expect(typeof transformed.name).toBe('string');
      expect(transformed.name).toBe('Jaguar XE');
      expect(transformToProps({ ...responseStub, id: 'fpace' }).name).toBe('Jaguar F-PACE');
    });

    it('Should format the emissions string', () => {
      const transformed = transformToProps(responseStub);

      expect(transformed).toHaveProperty('meta');
      expect(typeof transformed.meta.emissions).toBe('string');
    });
  });
});
