import React, { createContext, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: {
          userid: 1, //TODO: Remove Hardcoding once auth function is built
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default useAuth = () => {
  return useContext(AuthContext);
};
