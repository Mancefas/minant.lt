import React from "react";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Container
      sx={{ height: "fit-content", minHeight: "15vh", paddingTop: "0.2rem" }}
    >
      <Grid container>
        <Grid item xs={4}>
          <Image
            src="https://minant.lt/wp-content/uploads/2020/11/Logo-500x500-minant-kojos-e1604950393961-300x100.png"
            width={150}
            height={50}
            alt="minant.lt logo"
          ></Image>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <h3>
            Susisiekti <MailIcon sx={{ color: "#71833B" }} />
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
