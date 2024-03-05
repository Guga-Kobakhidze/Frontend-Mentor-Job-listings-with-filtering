import { Typography } from "@mui/material";
import React from "react";
import { SpanTextProps } from "../../interfaces/interface";

const SpanText: React.FC<SpanTextProps> = ({ bgColor, product, title }) => {
  return (
    <Typography
      component={"span"}
      fontSize={9}
      color={"white"}
      mr={1}
      sx={
        product
          ? {
              padding: "5px 5px 4px",
              borderRadius: "10px",
              backgroundColor: bgColor,
            }
          : {}
      }
    >
      {product ? `${title}` : null}
    </Typography>
  );
};

export default SpanText;
