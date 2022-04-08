
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuthUser } from './../../core/store/auth/selectors/selector';

export const PerfilComponent=()=>{

    const user=useSelector(selectAuthUser);

    console.log(user);


    return (<>
    <h1>Hola {user.displayName}</h1>
    <Link to='/'>Ir a home</Link>
    </>);
}