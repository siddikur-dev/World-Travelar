import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.config";
import { AuthContext } from "../AuthContext/AuthContext";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User With MailPass
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with mail pass
  const signInWithMailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Manage User State
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (res) => {
      setUser(res);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  //   value User Info
  const userInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signInWithMailPass,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
