import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import auth from '../firebase.init';


const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user,setUser] =  useState({});

    useEffect(() => {
        onAuthStateChanged(auth,user=>{
            setUser(user)
        })
    },[])

    const signInWithGoogle = () => {
        signInWithPopup(auth,googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
        })
        .then((error) => {
            console.error(error.message)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
    }

    return { 
        user,
        signInWithGoogle,
        handleSignOut
    };
}

export default useFirebase;