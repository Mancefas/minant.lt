import classes from "./header.module.css";

import { Container, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Container
      fixed
      sx={{ marginTop: "0.5rem", height: "fit-content", minHeight: "15vh" }}
    >
      <Grid container gap={1}>
        <Grid item xs={3}>
          <Image src="/img/logo.png" width={350} height={100}></Image>
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
          <Image src="/img/logo2.png" width={150} height={125}></Image>
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
              <Link href="/">
                <a>Patarimai</a>
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
