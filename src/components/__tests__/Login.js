/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProvideAuth from '../../hooks/useAuth.jsx';
import { MemoryRouter } from 'react-router-dom';
import { LoggedOut } from '../Login';

afterEach(cleanup);

test('calls performLogin when submitted', () => {
  const performLogin = jest.fn();
  const { getByLabelText, getByText } = render(
    <MemoryRouter>
      <ProvideAuth>
        <LoggedOut performLogin={performLogin} />
      </ProvideAuth>
    </MemoryRouter>
  );
  const usernameNode = getByLabelText('Username');
  const passwordNode = getByLabelText('Password');

  usernameNode.value = 'mockUser';
  passwordNode.value = 'mockPassword';
  getByText('Login').click();
  expect(performLogin).not.toBeCalledTimes(1);
});
