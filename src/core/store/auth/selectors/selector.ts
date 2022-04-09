
export const selectAuthUser = state => state.auth?.user;

export const selectAuthStatus = state =>{
  const { auth:{status}}=state
  return status;
}