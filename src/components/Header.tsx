import React from "react";
import HeaderBg from "../assets/images/bg-header-desktop.svg";
import { Box } from "@mui/material";
import SearchBar from "./search/SearchBar";

const Header: React.FC = () => {
  const onSearch = (searchTerm: string) => {
    console.log("Search clicked with term:", searchTerm);
  };

  return (
    <Box
      maxWidth={"100%"}
      sx={{ position: "relative", backgroundColor: "hsl(180, 29%, 50%)" }}
    >
      <img width={"100%"} src={HeaderBg} alt="header Background" />
      <SearchBar onSearchChange={onSearch} />
    </Box>
  );
};

export default Header;
