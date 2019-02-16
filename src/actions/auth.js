import { firebase, googleAuthProvider } from '../firebase/firebase';
export const login = (uid, username) => ({
  type: 'LOGIN',
  uid,
  username
});
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then(function(result) {
    // The signed-in user info.
    var user = result.user.displayName;
  });
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  };
};
