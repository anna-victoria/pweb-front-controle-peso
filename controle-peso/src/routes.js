import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

export default function CustomRoutes() {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Homescreen />}
            />
        </Routes>
    );
};
