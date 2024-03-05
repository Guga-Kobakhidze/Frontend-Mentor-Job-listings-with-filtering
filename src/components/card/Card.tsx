import React from "react";
import { productProps } from "../../interfaces/interface";
import { Box, Grid, Stack, Typography } from "@mui/material";
import SpanText from "../typography/SpanText";
import ButtonStyle from "../button/Button";

const Card: React.FC<productProps> = ({ product }) => {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={2.5}>
        <img src={product.logo} alt="something" />
        <div>
          <Grid container alignItems={"center"} mb={1}>
            <Typography
              fontSize={14}
              fontWeight={600}
              color={"hsl(180, 29%, 50%)"}
            >
              {product.company}
            </Typography>
            <Grid item ml={1}>
              <SpanText
                bgColor="hsl(180, 29%, 50%)"
                product={product.new}
                title="NEW !"
              />
              <SpanText
                bgColor="hsl(180, 14%, 20%)"
                product={product.featured}
                title="FEATURED"
              />
            </Grid>
          </Grid>
          <Typography
            fontSize={14}
            fontWeight={700}
            color={"hsl(180, 14%, 20%)"}
            mb={1}
          >
            {product.position}
          </Typography>
          <Typography
            fontSize={12}
            color={"gray"}
            sx={{ display: "flex", gap: "10px" }}
          >
            <span>{product.postedAt}</span>&#11049;
            <span>{product.contract}</span>&#11049;
            <span>{product.location}</span>
          </Typography>
        </div>
      </Box>
      <Stack spacing={1} direction={"row"}>
        <ButtonStyle name={product.role} />
        <ButtonStyle name={product.level} />
        {product.languages.map((language) => (
          <ButtonStyle name={language} />
        ))}
        {product.tools.map((tool) => (
          <ButtonStyle name={tool} />
        ))}
      </Stack>
    </>
  );
};

export default Card;
