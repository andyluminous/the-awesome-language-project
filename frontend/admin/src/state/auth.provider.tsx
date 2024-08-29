import { type ReactNode, useMemo, useState } from "react";
import { AuthContext } from "./auth.context";

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState<string|null>(localStorage.getItem('auth_token'));

  const providedValues = useMemo(() => ({
    authToken,
    setAuthToken,
  }), [authToken])

  return (
    <AuthContext.Provider value={providedValues}>
      {props.children}
    </AuthContext.Provider>
  );
}
