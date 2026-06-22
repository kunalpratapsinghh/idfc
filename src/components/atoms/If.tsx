import React from "react";

interface IfProps {
  condition: boolean;
  children: React.ReactNode;
  Else?: React.ReactNode;
}

export const If: React.FC<IfProps> = ({ condition, children, Else }) => {
  return <>{condition ? children : Else}</>;
};
export default If;
