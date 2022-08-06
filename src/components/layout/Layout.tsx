import React from "react";

const Layout = ({
  setExpandNav,
  expandNav,
  children,
}: {
  children: React.ReactNode;
  setExpandNav: any;
  expandNav: boolean;
}) => {
  return (
    <div
      className={`${
        expandNav
          ? "fixed inset-0 bg-black bg-opacity-20 transition-opacity"
          : null
      }"`}
    >
      {children}
    </div>
  );
};

export default Layout;
