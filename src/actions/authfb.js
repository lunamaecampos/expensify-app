import { firebase, facebookAuthProvider } from '../firebase/firebase';

export const startFbLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
  };
};

export const startFbLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
