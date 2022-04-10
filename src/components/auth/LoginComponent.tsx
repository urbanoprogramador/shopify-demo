
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from 'core/store/auth/selectors/selector';
import { asyncStartGoogleLogin } from '../../core/store/auth/actions/action';
import { useNavigate } from 'react-router';


export const LoginComponent=()=>{


    const user = useSelector(selectAuthUser);

    const navigate = useNavigate();

   useEffect(() => {
       console.log('esto es en login ',user);
       if (user) {
           return navigate("/auth");
       }
   }, [user, navigate]); 


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