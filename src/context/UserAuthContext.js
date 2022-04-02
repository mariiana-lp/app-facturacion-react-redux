import { createContext, useContext, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import { auth } from "../firebase/firebaseConfig";

const userAuthContext = createContext();

export function UserAuthContextProvider({ props }) {

    const[user, setUser] = useContext("");
    function signOut(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return () =>{
            unsubscribe();
        }
    },[])

    return <userAuthContext.Provider>{props}</userAuthContext.Provider>;
}

export function useUserAuth() {
    return useContext(userAuthContext);
}