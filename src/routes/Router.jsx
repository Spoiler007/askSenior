import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Navbar from '../components/Navbar';
import useAuth from '../hooks/useAuth';
import Auth from '../pages/Auth';

const Router = () => {
  const { token } = useAuth();
  return (
    <Routes>
      {token ? (
        <>
          {/* Private Routes */}
          <Route exact path="/" element={<Home />} />
        </>
      ) : (
        <>
          {/* Public Routes */}
          <Route path="auth" element={<Auth />} />
        </>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
