import React, { } from 'react';

import { Routes, Route,Outlet } from 'react-router-dom';

import { PerfilComponent } from './../components/auth/PerfilComponent';

export const DashboardRouter = () => {
    return (
        <div >
            <Routes>
                <Route path='/'>
                    <Route index element={<PerfilComponent/>} />
                </Route>
            </Routes>
        </div>
    )
}
