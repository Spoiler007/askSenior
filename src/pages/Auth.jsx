import React from 'react';
import useAuth from '../hooks/useAuth';

const Auth = () => {
  const { setToken } = useAuth();
  return (
    <>
      <div>Auth</div>
      <button
        onClick={() => {
          setToken('demo');
        }}
      >
        Login
      </button>
    </>
  );
};

export default Auth;
