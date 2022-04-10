import React, { useEffect } from 'react';

import {
    HashRouter as Router,
    Routes,
    Navigate,
    Route,
    Outlet,
    useNavigate
} from 'react-router-dom';



import { AuthRouter } from './AuthRouter';
import { DashboardRouter } from './DashboardRouter';
import { ProtectedRouter } from './ProtectedRouter';
import { selectAuthUser } from '../core/store/auth/selectors/selector';
import { useSelector } from 'react-redux';
import { Init } from '../components/public/Init';
import { Product } from '../components/public/product/Product';



const Rutas = () => {


    const user = useSelector(selectAuthUser) ? true : false;

    return (<div>
        <Routes>
            <Route path='/' >

                <Route path="auth/*"
                    element={
                        <ProtectedRouter
                            showRouter={!user}
                            component={AuthRouter}
                            to="/dashboard"
                        />}

                />

                <Route path="dashboard/*"
                    element={
                        <ProtectedRouter
                            showRouter={user}
                            to="/auth/login"
                            component={DashboardRouter} />
                    } />

                <Route path="product/:product" element={<Product />} />

                <Route
                    path="*"
                    element={<Navigate to="/product/free-trainer-3-mmw" replace />}
                />

                <Route
                    index
                    element={<Navigate to="/product/free-trainer-3-mmw" replace />}
                />

            </Route>

        </Routes>
    </div>);
}



export const AppRouter = () => {

    return (
        <Router>
            <Rutas />
            <Outlet />
        </Router>
    )
}
