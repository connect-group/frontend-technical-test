/* eslint-disable react/prop-types */
import React, { PropsWithChildren } from 'react';
import Text from '../text';

const Description: React.FC<PropsWithChildren> = ({ children }) => (
  <Text
    as="p"
    className="vehicle__content-description"
    data-testid="vehicle-description"
  >
    {children}
  </Text>
);
export default Description;
