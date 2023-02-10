import React from 'react';
import { render, screen } from '@testing-library/react';

test('should show login form', () => {
  render(<div className="test">test</div>)
  const input = screen.getByText('test');
  expect(input.classList).toContain('test');
})