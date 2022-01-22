import React from "react";
import Header from "./hero/header";
import Footer from "./hero/footer";

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
