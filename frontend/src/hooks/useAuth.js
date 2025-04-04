import { createContext, useContext } from "react";

// Create Auth Context
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;