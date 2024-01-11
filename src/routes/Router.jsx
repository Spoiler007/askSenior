import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Navbar from '../components/Navbar';
import useAuth from '../hooks/useAuth';
import Auth from '../pages/Auth';
import Landing from '../pages/Landing'
import Home from '../pages/Home'
import Login from '../components/Validation/Login'
import Signup from '../components/Validation/Signup'
import Profile from '../pages/Profile'

const Router = () => {
  const { token } = useAuth();
  return (
    <Routes>
      {token ? (
        <>
          {/* Private Routes */}
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />

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
