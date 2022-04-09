
import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';


import { LoginComponent } from '../components/auth/LoginComponent';
import { RegisterComponent } from '../components/auth/RegisterComponent';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                
            
                <p>pedro per</p>
                <Routes>
                    <Route path='/'>
                        <Route
                            path="login"
                            element={<LoginComponent />}
                        />
                        <Route

                            path="register"
                            element={<RegisterComponent />}
                        />

                        <Route
                            index

                            element={<Navigate to="login" replace />} />
                        <Route
                            path='*'
                            element={<Navigate to="login" replace />} />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}
