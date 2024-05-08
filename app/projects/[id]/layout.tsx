import React, { ReactNode } from "react";
import ProjectNav from "../ProjectNav";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div>
        <ProjectNav />
        {children}
      </div>
    </>
  );
};

export default layout;
