import React from "react";
import Button from "@mui/material/Button";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const HeroButtons = () => {
  return (
    <div
      style={{
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Button variant="contained" size="large" color="success">
        <DirectionsBikeIcon sx={{ marginRight: "0.5rem" }} /> Maršrutai
      </Button>
      <Button variant="contained" size="large" color="success">
        <MenuBookIcon sx={{ marginRight: "0.5rem" }} /> Skaitiniai
      </Button>
    </div>
  );
};

export default HeroButtons;
