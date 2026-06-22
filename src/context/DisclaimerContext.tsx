"use client";
import { ParnterDisclaimerData } from "@/lib/stencilssr";
import { createContext, ReactNode, useContext } from "react";

interface DisclaimerContextType {
  disclaimers: ParnterDisclaimerData | null;
}

const DisclaimerContext = createContext<DisclaimerContextType | undefined>(
  undefined
);

interface DisclaimerProviderProps {
  disclaimers: ParnterDisclaimerData | null;
  children: ReactNode;
}

export const DisclaimerProvider = ({
  disclaimers,
  children
}: DisclaimerProviderProps) => {
  return (
    <DisclaimerContext.Provider value={{ disclaimers }}>
      {children}
    </DisclaimerContext.Provider>
  );
};
export const useDisclaimer = () => {
  const context = useContext(DisclaimerContext);
  if (!context) {
    throw new Error("useDisclaimer must be used within a DisclaimerProvider");
  }
  return context;
};
