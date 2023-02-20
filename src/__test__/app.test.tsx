import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app';
import * as utils from '../utils/add';

jest.mock('../utils/add');

test('test app', () => {
  render(<App />);
  expect(screen.getByText('hello world')).toBeInTheDocument();
  expect(screen.getByText('hello world').classList).toContain('app');
});

test('test add', async () => {
  // let res = utils.add(1, 2);
  // expect(res).toBe(3);
  const mockedAsyncAdd = jest.mocked(utils.asyncAdd);
  mockedAsyncAdd.mockResolvedValue(1);
  const res = await mockedAsyncAdd(1, 2);
  expect(res).toBe(1);
});
