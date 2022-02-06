import React, { useState } from "react";

import { Button, Box, LinearProgress } from "@mui/material";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Link from "next/link";

const HeroButtons = () => {
  const [showLoading, setShowLoading] = React.useState(false);

  const handelLoading = () => {
    setShowLoading(!showLoading);
  };

  return (
    <>
      <Box sx={{ width: "60%", margin: "auto", marginBottom: "1rem" }}>
        {showLoading && <LinearProgress color="success" />}
      </Box>
      <div
        style={{
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#71833B", color: "black" }}
        >
          <DirectionsBikeIcon sx={{ marginRight: "0.5rem" }} /> Maršrutai
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#71833B", color: "black" }}
        >
          <Link href="/posts">
            <a onClick={handelLoading}>
              <MenuBookIcon sx={{ marginRight: "0.5rem" }} /> Skaitiniai
            </a>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default HeroButtons;
