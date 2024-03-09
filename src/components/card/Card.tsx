import React from "react";
import { productProps } from "../../interfaces/interface";
import { Box, Grid, Stack, Typography } from "@mui/material";
import SpanText from "../typography/SpanText";
import ButtonStyle from "../button/ButtonStyle";

const Card: React.FC<productProps> = ({ product, clickBtn, onFind }) => {
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
      <Stack
        spacing={1}
        direction={"row"}
        sx={{
          "@media screen and (max-width: 1200px)": {
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "10px",
          },
        }}
      >
        <ButtonStyle name={product.role} onClick={clickBtn} onFind={onFind} />
        <ButtonStyle name={product.level} onClick={clickBtn} onFind={onFind} />
        {product.languages.map((language, index) => (
          <ButtonStyle
            key={index}
            name={language}
            onClick={clickBtn}
            onFind={onFind}
          />
        ))}
        {product.tools.map((tool, index) => (
          <ButtonStyle
            key={index}
            name={tool}
            onClick={clickBtn}
            onFind={onFind}
          />
        ))}
      </Stack>
    </>
  );
};

export default Card;
