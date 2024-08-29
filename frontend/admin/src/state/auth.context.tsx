import { type Context, createContext, useContext } from "react";

export const AuthContext: Context<any> = createContext<any>(null);

export const useAuthContext = () => useContext(AuthContext);
