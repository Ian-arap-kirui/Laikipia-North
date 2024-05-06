import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>navigation</div>
      <main>
        <Outlet />
      </main>
      <div>footer</div>
    </>
  );
};

export default Layout;
