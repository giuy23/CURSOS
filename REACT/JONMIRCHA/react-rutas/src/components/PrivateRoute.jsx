import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

let auth;
auth=true;
auth=null;
// const PrivateRoute = ({private:Private }) => {
//     return auth ? <Private /> : <Navigate to="/login" />;
//  };

const PrivateRoute = ({ component: Component }) => {
    return auth ? <Component /> : <Navigate to="/login" />;
 };

export default PrivateRoute