import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from "react";
import app from "../firebase.init";

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user,setUser] =  useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth,googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .then((error) => {
            console.error(error.message)
        })
    }

    return {user,signInWithGoogle};
}

export default useFirebase;