import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app';

test('should show login form', () => {
  const componet = render(<App />);
  expect(screen.getByText('hello world').classList).toContain('app');
});