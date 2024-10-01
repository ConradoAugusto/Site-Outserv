import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Guard = () => {
  const isAuthenticated = localStorage.getItem('wpToken');

  return isAuthenticated ? <Outlet /> : <Navigate to="/blog/login" />;
};

export default Guard;
