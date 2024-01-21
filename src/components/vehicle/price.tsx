/* eslint-disable react/prop-types */
import React, { PropsWithChildren } from 'react';
import Text from '../text';

const Price: React.FC<PropsWithChildren> = ({ children }) => (
  <Text as="p" className="vehicle__content-price" data-testid="vehicle-price">
    From
    {' '}
    {children}
  </Text>
);
export default Price;
