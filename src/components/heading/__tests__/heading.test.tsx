import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from '..';

describe('<Text />', () => {
  it('renders the component with default span tag', () => {
    render(<Heading>Test content</Heading>);
    const textElement = screen.getByText('Test content');
    expect(textElement).toBeDefined();
    expect(textElement.tagName).toBe('H1');
  });

  it('renders the component with a custom tag when "as" prop is provided', () => {
    render(<Heading as="h4">Test content</Heading>);
    const textElement = screen.getByText('Test content');
    expect(textElement).toBeDefined();
    expect(textElement.tagName).toBe('H4');
  });
});
