import React from "react";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Container sx={{ height: "fit-content", minHeight: "15vh" }}>
      <Grid container>
        <Grid item xs={4}>
          <Image src="/img/logo.png" width={150} height={50}></Image>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <h3>
            Susisiekti <MailIcon />
          </h3>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            color: "blue",
          }}
        >
          <FacebookIcon />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
