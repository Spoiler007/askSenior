import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, _setToken] = useState(localStorage.getItem('token'));
  const setToken = (t) => {
    _setToken(t);
    localStorage.setItem('token', t);
  };

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token],
  );

  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
