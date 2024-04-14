

import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);
 
 const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email , password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('current user: ', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

   const authInfo = {name:"Md. Parvaj Mosharof",loading, user, createUser, LogInUser, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
 };
 

 AuthProvider.propTypes ={
    children: PropTypes.node
 }
 export default AuthProvider;
 