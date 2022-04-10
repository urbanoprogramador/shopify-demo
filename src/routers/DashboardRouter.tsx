import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import { PerfilComponent } from '../components/auth/PerfilComponent';
import { selectAuthUser } from './../core/store/auth/selectors/selector';
import { useSelector } from 'react-redux';


import {
    useNavigate
} from 'react-router-dom';


export const DashboardRouter = () => {

   const user = useSelector(selectAuthUser);

     const navigate = useNavigate();

    useEffect(() => {
        console.log('que es esto ',user);
        if (!user) {
            return navigate("/auth");
        }
    }, [user, navigate]); 


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
