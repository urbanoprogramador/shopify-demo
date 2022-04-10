import { IUser } from "../reducers/reducer";



export const selectAuthUser = (state):IUser|null => state.auth.user;

export const selectAuthStatus = state =>{
  const { auth:{status}}=state
  return status;
}