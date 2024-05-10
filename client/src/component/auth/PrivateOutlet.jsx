import { Outlet, Navigate } from "react-router-dom";
import React from "react";
const PrivateOutlet = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/Email-marketing/user/Login" />
  );
};

export default PrivateOutlet;
