import React, { Suspense } from "react";
import Header from "../headers/Header";
import Footer from "../footers/Footer";
import Sidebar from "../sidebars/Sidebar";

//import react - router - dom components
import { Outlet } from "react-router-dom";

// import styles for the component Layout
import "./layout.modules.css";

const Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main id="main">
        <section id="header">
          <Header />
        </section>
        <section id="content-layout">
          <Sidebar />
          <article>
            <Outlet />
          </article>
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </Suspense>
  );
};

export default Layout;
