import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

test('renders CryptoDash dashboard', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to CryptoDash/i);
  expect(linkElement).toBeInTheDocument();
});
