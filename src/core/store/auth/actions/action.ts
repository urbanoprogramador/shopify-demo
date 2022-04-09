import { asyncTodos, typeAuth } from "../reducers/reducer";
import { asyncMac, mac } from "../../utils/configReducer";


import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword ,signOut} from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";

const [
  actionAuthPending,
  actionAuthError,
  actionAuthSuccess
] = asyncMac(asyncTodos);

export const actionAuthUser = mac(typeAuth.login, 'payload');
export const actionAuthLogout = mac(typeAuth.logout);


export const actionClearAuth = () => dispatch => {
  dispatch(actionAuthLogout());
  localStorage.removeItem('user');
}

export const asyncStartGoogleLogin = () => (dispatch) => {
  dispatch(actionAuthPending());
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      const user = (result.user as any);
      console.log(user);



      dispatch(actionAuthUser({
        displayName: user.displayName,
        email: user.email,
        token: user.accessToken,
      }));
      localStorage.setItem('user', JSON.stringify({
        displayName: user.displayName,
        email: user.email,
        token: user.accessToken,
      }));
      dispatch(actionAuthSuccess());


      // ...
    }).catch((error) => {

      //auth/popup-closed-by-user
      console.log({ error });
      if (error.code === "auth/popup-closed-by-user") {
        dispatch(actionAuthError("ventana cerrada por el usuario "));
      } else {
        dispatch(actionAuthError("Error Desconocido "));
      }

    });
}

export const asyncCreateUserWithEmailAndPassword = ({ email, password, displayname }) => dispatch => {
  dispatch(actionAuthPending());

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      auth.currentUser &&
      updateProfile(auth.currentUser, {
        displayName: displayname
      }).then(() => {
        // Profile updated!
        // ...
        const user = (userCredential.user as any);
        dispatch(actionAuthUser({
          displayName: user.displayName,
          email: user.email,
          token: user.accessToken,
        }));
        localStorage.setItem('user', JSON.stringify({
          displayName: user.displayName,
          email: user.email,
          token: user.accessToken,
        }));
        dispatch(actionAuthSuccess());
      }).catch((error) => {
        console.log(error);
      });

      // ...
    })
    .catch((error) => {
      console.log({ error });

      if (error.code === "auth/email-already-in-use" || error.code === "auth/user-not-found") {
        dispatch(actionAuthError("Usuario ya se encuentra registrado"));
      } else {
        dispatch(actionAuthError("Error Desconocido "));
      }
    });

}


export const asyncLoginEmailAndPassword = ({ email, password }) => dispatch => {
  dispatch(actionAuthPending());
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = (userCredential.user as any);
      dispatch(actionAuthUser({
        displayName: user.displayName,
        email: user.email,
        token: user.accessToken,
      }));
      localStorage.setItem('user', JSON.stringify({
        displayName: user.displayName,
        email: user.email,
        token: user.accessToken,
      }));
      dispatch(actionAuthSuccess());
      // ...
    })
    .catch((error) => {

      /* 
      "auth/wrong-password"
      auth/user-not-found
      */
      console.log({ error });

      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        dispatch(actionAuthError("Usuario o contraseña invalido"));
      } else {
        dispatch(actionAuthError("Error Desconocido "));
      }
    });
}

export const asyncSignOut = () => dispatch => {
  dispatch(actionAuthPending());
  signOut(auth).then(() => {
    dispatch( actionClearAuth());
    dispatch(actionAuthUser(null));
    dispatch( actionAuthSuccess());
  }).catch((error) => {
    console.log({error});
    dispatch(actionAuthError("Error Desconocido "));
  });
}