import { firebase, facebookAuthProvider } from '../firebase/firebase';
export const login = (uid) => ({
  type: 'LOGIN',
  uid
});
export const startFbLogin = () => {
  return () => {
    facebookAuthProvider.addScope('user_birthday');
    return firebase.auth().signInWithPopup(facebookAuthProvider).then(function(result) {
    // This gives you a Facebook Access Token.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    });
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startFbLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
