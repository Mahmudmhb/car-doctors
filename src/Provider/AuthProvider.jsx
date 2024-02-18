import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const authContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   console.log(user);
  const SignUPUpdate = (name, img) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const HandleLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const handleSignWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const AuthInfo = {
    handleSignUp,
    SignUPUpdate,
    handleLogin,
    HandleLogOut,
    handleSignWithGoogle,
    user,
    loading,
  };
  return (
    <authContext.Provider value={AuthInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
