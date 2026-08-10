import { createContext, useContext, useEffect, useState } from "react";
import type { Professional } from "../types/Professional";

interface AuthContextType {
  user: Professional | null;
  login: (user: Professional) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {}
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Professional | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("loggedUser");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const login = (user: Professional) => {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
