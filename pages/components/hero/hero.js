import React from "react";
import classes from "./hero.module.css";
import HeroButtons from "./heroButtons";
import WhatSection from "./whatSection";

const Hero = () => {
  return (
    <>
      <section className={classes.section}></section>;
      <HeroButtons />
      <WhatSection />
    </>
  );
};

export default Hero;
