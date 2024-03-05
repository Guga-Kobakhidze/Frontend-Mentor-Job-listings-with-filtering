import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Card from "../components/card/Card";
import { CardProps } from "../interfaces/interface";

const CardList: React.FC = () => {
  const [data, setData] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/response/data.json");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box p={5} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {data.map((product) => (
        <Grid
          key={product.id}
          item
          xs={12}
          sm={12}
          container
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Card product={product} />
        </Grid>
      ))}
    </Box>
  );
};

export default CardList;
