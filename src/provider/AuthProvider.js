import jwt from "jwt-decode";
import React, { createContext, useContext, useEffect, useState } from "react";
import { userDetails, userLogin } from "../api";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const localToken = localStorage.getItem("LOCAL_STORAGE_TOKEN");
      //   console.log("localToken", localToken);
      if (localToken) {
        // console.log("localToken insideif", localToken);
        const token = jwt(localToken);

        if (token) {
          const user = await userDetails(token.userId);

          setUser(user);
        }
      }
    }
    getUser();
  }, []);

  const login = async (email, password) => {
    const response = await userLogin(email, password);
    if (response) {
      const token = response.token;

      const localToken = jwt(token);
      const user = await userDetails(localToken.userId);
      setUser(user);
      return token;
    }
  };
  const logout = () => {
    localStorage.removeItem("LOCAL_STORAGE_TOKEN");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
