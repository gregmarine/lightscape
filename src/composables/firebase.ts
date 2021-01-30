import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import { toRefs, reactive } from "vue";

import firebaseConfig from "./firebase-config";

const state = reactive<{
  initialized: boolean;
  error: any;
  user: null | firebase.User;
  isAuthenticated: boolean;
}>({
  initialized: false,
  error: null,
  user: null,
  isAuthenticated: false,
});

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  if(window.location.hostname && window.location.hostname === "localhost") {
    firebase.auth().useEmulator('http://localhost:9099');
    firebase.functions().useEmulator("localhost", 5001);
  }
}

export default function() {
  const authCheck = () => {
    return new Promise((resolve) => {
      !state.initialized &&
        firebase.auth().onAuthStateChanged((_user) => {
          if (_user) {
            state.user = _user;
            state.isAuthenticated = true;
          } else {
            state.user = null;
            state.isAuthenticated = false;
          }

          state.initialized = true;
          resolve(true);
        });
    });
  };

  const signOut = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        state.error = null;
        state.user = null;
        state.isAuthenticated = false;
      })
      .catch((_error) => {
        state.error = _error;
      });
  };

  const signUpWithEmailPassword = async (_email: string, _password: string) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(_email, _password)
      .then(() => {
        state.error = null;
      })
      .catch((_error) => {
        state.error = _error;
      });
  };

  const signInWithEmailPassword = async (_email: string, _password: string) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(_email, _password)
      .then(() => {
        state.error = null;
      })
      .catch((_error) => {
        state.error = _error;
      });
  };

  const sendPasswordReset = async (_email: string) => {
    await firebase
      .auth()
      .sendPasswordResetEmail(_email)
      .then(() => {
        state.error = null;
      })
      .catch((_error) => {
        state.error = _error;
      });
  };

  const getFunction = (_functionName: string) => {
    return firebase.functions().httpsCallable(_functionName);
  };

  return {
    ...toRefs(state),
    authCheck,
    signOut,
    signUpWithEmailPassword,
    signInWithEmailPassword,
    sendPasswordReset,
    getFunction,
  };
}
