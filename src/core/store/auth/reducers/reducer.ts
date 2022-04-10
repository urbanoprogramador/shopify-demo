import {combineReducers} from "redux";
import {
  makeFetchingReducer,
  makeSetReducer,
  mat,
  makeRemoveReducer,
  reduceReducers,
  } from "../../utils/configReducer";

const authName='[auth]';


export const typeAuth={
  login: `${authName} login User`,
  logout:`${authName} logout user`
}
export interface IUser{
  displayName: String,
  email: String,
  token: String,
}

const initLogin=():IUser|null=>{
  const user =localStorage.getItem('user');
  return user && JSON.parse(user );
}

export const asyncTodos = mat(authName);




const userLogout=makeRemoveReducer<null>(typeAuth.logout);


const userLogin=makeSetReducer<IUser>({actions:typeAuth.login,initialState:initLogin()});

export const fetchingReducer=makeFetchingReducer(asyncTodos);

export const userReducer=combineReducers({
  user:reduceReducers<IUser|null>(userLogin,userLogout),
  status:fetchingReducer
});
