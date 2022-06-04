import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/homescreen/home'
import Login from './screens/login/login';

export default function CustomRoutes() {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Home />}
            />
            <Route
                path='/login'
                element={<Login />}
            />
        </Routes>
    );
};
