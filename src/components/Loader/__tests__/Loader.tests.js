import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Loader from '..';

describe('Loader component', () => {
  it('renders the loading message correctly', () => {
    const { getByTestId } = render(<Loader />);
    const loadingElement = getByTestId('loading');

    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveTextContent('Loading...');
  });
});
