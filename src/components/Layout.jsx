import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Navigation/Nav";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
