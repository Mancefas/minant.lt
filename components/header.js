import classes from "./header.module.css";
import React, { useState } from "react";

import { Box, LinearProgress, Container, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showLoading, setShowLoading] = React.useState(false);

  const handelLoading = () => {
    setShowLoading(!showLoading);
  };

  return (
    <Container
      fixed
      sx={{ marginTop: "0.5rem", height: "fit-content", minHeight: "15vh" }}
    >
      <Box sx={{ width: "100%" }}>
        {showLoading && <LinearProgress color="success" />}
      </Box>
      <Grid container gap={1}>
        <Grid item xs={3}>
          <Link href="/">
            <a>
              <Image
                src="https://minant.lt/wp-content/uploads/2020/11/Logo-500x500-minant-kojos-e1604950393961-300x100.png"
                width={350}
                height={100}
                alt="minant.lt logo"
              ></Image>
            </a>
          </Link>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="https://minant.lt/wp-content/uploads/2020/11/minant.lt-3.png"
            width={125}
            height={50}
            alt="minant.lt logo"
          ></Image>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex" }}>
          <ul className={classes.ul}>
            <li>
              <Link href="/">
                <a> Kur važiuoti Kaune </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> Kur važiuoti Vilniuje</a>
              </Link>
            </li>
          </ul>
          <ul className={classes.ul}>
            <li>
              <Link href="/posts">
                <a onClick={handelLoading}>Patarimai</a>
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
