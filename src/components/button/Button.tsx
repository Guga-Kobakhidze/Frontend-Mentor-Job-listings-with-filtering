import { Button } from "@mui/material";
import React from "react";

const ButtonStyle: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        padding: "5px",
        backgroundColor: "hsl(180, 52%, 96%)",
        color: "hsl(180, 29%, 50%)",
        fontWeight: "bold",
        transition: "0.5s",
        "&:hover": {
          backgroundColor: "hsl(180, 29%, 50%)",
          color: "hsl(180, 52%, 96%)",
        },
      }}
    >
      {name}
    </Button>
  );
};

export default ButtonStyle;
