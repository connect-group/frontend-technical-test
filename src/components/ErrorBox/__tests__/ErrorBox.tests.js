import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ErrorBox from '..';

describe('ErrorBox component', () => {
  it('renders the error message correctly', () => {
    const error = 'Something went wrong';
    const { getByTestId } = render(<ErrorBox error={error} />);
    const errorElement = getByTestId('error');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(error);
  });
});
