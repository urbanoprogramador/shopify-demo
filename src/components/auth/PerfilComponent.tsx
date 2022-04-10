
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuthUser } from '../../core/store/auth/selectors/selector';
import { asyncSignOut } from './../../core/store/auth/actions/action';

export const PerfilComponent = () => {

  const user = useSelector(selectAuthUser);

  console.log(user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(asyncSignOut());
  }
  


  return (<>
    <h1>Hola {user?.displayName}</h1>
    <button onClick={handleLogout}>cerrar session</button>
    <Link to='/'>Ir a home</Link>
  </>);
}