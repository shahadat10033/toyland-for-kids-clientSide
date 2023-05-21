import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);

  //  registration email

  const emailRegistration = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   email sign in
  const emailLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google sign up
  const googleProvider = new GoogleAuthProvider();

  // UserStategetting

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  //  profile update

  const profileUpdate = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {})
      .catch((error) => {
        // ...
      });
  };

  const authInformation = {
    profileUpdate,
    googleProvider,
    auth,
    user,
    emailRegistration,
    setUser,
    setLoader,
    emailLogin,
    loader,
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
