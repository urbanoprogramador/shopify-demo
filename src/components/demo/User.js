import { useDispatch, useSelector } from 'react-redux';

import { asyncStartGoogleLogin, asyncCreateUserWithEmailAndPassword, asyncLoginEmailAndPassword ,asyncSignOut} from '../../core/store/auth/actions/action';

import { auth } from '../../core/firebase/firebase-config';
import { selectAuthStatus, selectAuthUser } from '../../core/store/auth/selectors/selector';





export const GoogleCompoent = () => {
    const dispatch = useDispatch();
  
    const handleGoogleLogin = () => {
      console.log('iniciando');
      dispatch(asyncStartGoogleLogin({ parametro: 'siiii' }));
    }
  
    const handleCreateUser = () => {
      console.log('creando usuarios');
      dispatch(asyncCreateUserWithEmailAndPassword({
        email: 'urbanoprogramador@gmail.com',
        password: '123456789',
        displayname: 'juan peres'
      }));
    }
  
    console.log('queeeeeeeeeeeeeeeeeeeeeeee');
    console.log({ currentUser: auth.currentUser });
  
    const handleLoginUser = () => {
      console.log('creando usuarios');
      dispatch(asyncLoginEmailAndPassword({
        email: 'urbanoprogramador@gmail.com',
        password: '123456789'
      }));
    }
  
    return (
      <>
        <button onClick={handleGoogleLogin}>
          iniciar session con google
        </button>
        <div>
          crear usuario dantex@ejemplo.com
          <br />
          password 123456789
          <br />
          nombre juan peres
        </div>
  
        <button onClick={handleCreateUser}>
          crear usuario
        </button>
  
        <button onClick={handleLoginUser}>
          login con usuario creado dantex@ejemplo.com contraseña 123456789
        </button>
      </>
    );
  }
  
  
export  const User=()=>{
    const user=useSelector(selectAuthUser);
    const status=useSelector(selectAuthStatus);
    const dispatch = useDispatch();
    const handleLogout=()=>{
      dispatch(asyncSignOut());
    }
  
  
      switch (status.loading) {
        case 'pending':
          return (<>
            <h1>Cargando</h1>
          </>);
        case 'rejected':
          return (<>
            <h1>Error {status.error}</h1>
            <GoogleCompoent />
          </>);
        case 'succeded':
        default:
          if(!user){
            return (<>
              <h1>Debe iniciar Session</h1>
              <GoogleCompoent />
              </>);
          }else{
            return (<>
              correo:{user.email}
              <br/>
              nombre :{user.displayName}
  
              <button onClick={handleLogout}>cerrar session</button>
            </>);
          }
          
          
      }
  }