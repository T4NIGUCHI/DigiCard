import React from 'react';
import { render, screen } from '@testing-library/react';
import SampleComponent from '../components/SampleComponent';

test('renders Hello, Jest!', () => {
  render(<SampleComponent />);
  const linkElement = screen.getByText(/Hello, Jest!/i);
  expect(linkElement).toBeInTheDocument();
});
