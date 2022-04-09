
import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncStartGoogleLogin } from '../../core/store/auth/actions/action';


export const LoginComponent=()=>{
    const dispatch=useDispatch();
    return (<>
        <h1>hola estoy en LoginComponent</h1>
        <button onClick={()=>{
            dispatch(asyncStartGoogleLogin());
        }}>


            Login
        </button>
        </>);
}