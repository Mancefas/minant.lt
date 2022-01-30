import React from "react";
import Header from "./header";
import Footer from "./footer";

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
