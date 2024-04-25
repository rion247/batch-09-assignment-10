import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from './../../FireBase/fireBase.Config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, SetUser] = useState(null);

    const [loading, SetLoading] = useState(true);

    const [reload, SetReload] = useState(false);

    const createUserManually = (email, password) => {
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUserManually = (email, password) => {
        SetLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const googleLogIn = () => {
        SetLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const gitHubProvider = new GithubAuthProvider();

    const gitHubLogIn = () => {
        SetLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('User is Signed In');
                SetUser(currentUser);
                SetLoading(false);
            } else {
                console.log('User is Signed Out');
                SetUser(currentUser);
                SetLoading(false);
            }
        });

        return () => {
            unSubcribe();
        }

    }, [reload]);


    const updateUserProfile = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo,
        });

    }

    const authInfo = {
        user,
        loading,
        SetReload,
        createUserManually,
        signInUserManually,
        googleLogIn,
        gitHubLogIn,
        updateUserProfile,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;