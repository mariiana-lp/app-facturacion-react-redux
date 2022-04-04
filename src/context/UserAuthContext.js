import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";



const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut(){
    return signOut(auth);
  }

  function googleSignIn(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider)
  }

function signInWithGitHub (){
  const gitHubProvider = new GithubAuthProvider()
    return signInWithPopup(auth, gitHubProvider)
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn, signInWithGitHub }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
