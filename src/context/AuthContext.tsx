"use client";

import { useLoginController } from "@/hooks/useLoginController";
import { CheckCsrfResponse } from "@/server/schemas/auth/auth";
import { CheckLoginOptions } from "@/types/loginController";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

export type User = {
  id: string;
  title: string;
  name: string;
  email?: string;
  role?: string;
  obopUUID?: string;
  selectedCard?: any;
  customerCards?: any[]; // Array of card objects
  loginId: string;
  customerInfo?: CheckCsrfResponse; // Additional customer info
  // Card Points Etc
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
  token: string | null;
  programName?: string;
  cardLayout?: string;
  setNavHeaderReady: (val: boolean) => void;
  customerInfo?: CheckCsrfResponse;
  loginControllerEvent: (
    callback: (res: any) => void,
    loginOptions: CheckLoginOptions
  ) => void;
  showAddCardModalEvent: (callback: (res: any) => void) => void;
  isNavHeaderReady?: boolean;
  subProgram?: string;
  cardType?: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
  loggedInUser,
  programName = "SMARTBUY",
  customerInfo,
  layout,
  children
}: {
  loggedInUser: User | null;
  programName?: string;
  customerInfo: CheckCsrfResponse;
  children: ReactNode;
  layout?: string;
}) => {
  const [user, setUser] = useState<User | null>(loggedInUser);
  const [cardLayout, setCardLayout] = useState<string | undefined>(layout);
  const [token, setToken] = useState<string | null>(null);
  const { cardType = "", subProgram = "" } = customerInfo?.ccustomer || {};
  const isAuthenticated = user?.customerInfo?.org_session === 1;
  const [isNavHeaderReady, setNavHeaderReady] = useState(false);

  //hooks
  const { loginControllerEvent, showAddCardModalEvent } = useLoginController();

  useEffect(() => {
    // header web component config removed
  }, [customerInfo, cardType, subProgram]);

  useEffect(() => {
    setCardLayout(layout);
  }, [layout]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        programName,
        token,
        setToken,
        cardLayout,
        loginControllerEvent,
        showAddCardModalEvent,
        setNavHeaderReady,
        isNavHeaderReady,
        customerInfo,
        subProgram,
        cardType
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// Hook for consuming
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
