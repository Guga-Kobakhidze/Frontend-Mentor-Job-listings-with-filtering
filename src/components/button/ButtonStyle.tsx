import { Button } from "@mui/material";
import React from "react";
import { ButtonProps } from "../../interfaces/interface";

const ButtonStyle: React.FC<ButtonProps> = ({ name, onClick, onFind }) => {
  const onBtnClick = () => {
    onClick(name);
  };

  return (
    <form onClick={onFind}>
      <Button
        onClick={onBtnClick}
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
    </form>
  );
};

export default ButtonStyle;
