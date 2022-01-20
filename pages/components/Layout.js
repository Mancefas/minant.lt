import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <section style={{ height: "fit-content", minHeight: "75vh" }}>
        {props.children}
      </section>
      <Footer />
    </>
  );
};

export default Layout;
