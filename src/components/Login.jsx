import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useAuth } from '../hooks/useAuth.jsx';

export default function LogIn({ hideModal }) {
  const {
    user: { isLoggedIn },
    signIn,
    signOut
  } = useAuth();
  const init = { username: '', password: '' };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const handleLogout = () => {
    signOut();
    hideModal();
  };

  const handleLogin = (user, pass) => {
    signIn(user, pass);
    hideModal();
  };

  const performLogin = (evt) => {
    evt.preventDefault();
    handleLogin(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value
    });
  };

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <LoggedIn handleLogout={handleLogout} />
      ) : (
        <LoggedOut change={onChange} performLogin={performLogin} />
      )}
    </React.Fragment>
  );
}

export function LoggedOut({ performLogin, change }) {
  return (
    <div>
      <h2>Login details</h2>
      <form onSubmit={performLogin} onChange={change}>
        <TextField
          size='small'
          id='username'
          label='Username'
          variant='outlined'
        />
        <TextField
          size='small'
          id='password'
          label='Password'
          variant='outlined'
        />
        <Button id='loginBtn' variant='outlined' color='primary' type='submit'>
          Login
        </Button>
      </form>
    </div>
  );
}

function LoggedIn({ handleLogout }) {
  return (
    <div>
      <h2>Logout</h2>
      <button id='logoutBtn' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
