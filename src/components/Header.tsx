import React from "react";
import HeaderBg from "../data/images/bg-header-desktop.svg";
import { Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box
      maxWidth={"100%"}
      sx={{ position: "relative", backgroundColor: "hsl(180, 29%, 50%)" }}
    >
      <img width={"100%"} src={HeaderBg} alt="header Background" />
    </Box>
  );
};

export default Header;
