import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/homescreen/home'
import Login from './screens/login/login';
import Dashboard from './screens/dashboard/dashboard'
import Info from './screens/attinfo/info';

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
            <Route 
                path="/dashboard" 
                element={<Dashboard />}
            />
            <Route
                path="/attdados"
                element={<Info />}
            />
        </Routes>
    );
};
