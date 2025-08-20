"use client";

import { Session } from "next-auth";
import { useSession } from "next-auth/react";

import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  session: Session | null;
  logout?: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { status, data: session } = useSession();

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, session }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
