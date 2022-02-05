import React from "react";
import classes from "./whatSection.module.css";
import Image from "next/image";
import { Grid, Box } from "@mui/material";

const DATA = [
  {
    id: "1",
    text: "Stiprinama širdies sistema",
    img: "/img/sirdies-darbas-minant.lt_.png",
  },
  {
    id: "2",
    text: "Stiprinama imuninė sistema",
    img: "/img/imunine-sistema-minant.lt_.png",
  },
  {
    id: "3",
    text: "Plečiamas socialinis tinklas",
    img: "/img/soc-minant.lt_.png",
  },
  {
    id: "4",
    text: "Minant nenaudojamos kaukė",
    img: "/img/kauke-minant.lt_.png",
  },
  {
    id: "5",
    text: "Naikinami nereikalingi kg",
    img: "/img/figura-minant.lt_.png",
  },
  { id: "6", text: "Neišmetama CO2", img: "/img/co2-minant.lt_.png" },
];

const WhatSection = () => {
  return (
    <section>
      <h2 className={classes.mainText}>Kas vyksta minant? </h2>
      <Box
        sx={{
          width: "80vw",
          margin: "auto",
          minHeight: "40vh",
          height: "fit-content",
        }}
      >
        <Grid container>
          {DATA.map((item) => (
            <Grid
              key={item.id}
              item
              xs={8}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <Image src={item.img} width={75} height={50} alt=""></Image>
              {/* <img src={item.img}></img> */}
              <h5 className={classes.text}>{item.text}</h5>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default WhatSection;
