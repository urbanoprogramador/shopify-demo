import {combineReducers} from "redux";
import {
  makeFetchingReducer,
  makeSetReducer,
  mat,
  makeRemoveReducer,
  reduceReducers} from "../../utils/configReducer";

const authName='[auth]';

export const typeAuth={
  login: `${authName} login User`,
  logout:`${authName} logout user`
}

const initLogin=()=>{
  return localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null;
}

export const asyncTodos = mat(authName);

const userLogout=makeRemoveReducer(typeAuth.logout);
const userLogin=makeSetReducer({actions:typeAuth.login,initialState:initLogin()});

export const fetchingReducer=makeFetchingReducer(asyncTodos);

export const userReducer=combineReducers({
  user:reduceReducers(userLogin,userLogout),
  status:fetchingReducer
});
