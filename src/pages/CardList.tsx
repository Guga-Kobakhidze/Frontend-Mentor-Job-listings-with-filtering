import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { CardProps } from "../interfaces/interface";
import Card from "../components/card/Card";
import useFetch from "../hooks/useFetch";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";
import SearchBar from "../components/search/SearchBar";

const CardListPage: React.FC = () => {
  const { data, loading, error } = useFetch("/src/data/data.json");
  const [filtered, setFiltered] = useState<CardProps[]>([]);
  const [clicked, setClicked] = useState<string>("");

  useEffect(() => {
    setFiltered(data);
    onFind();
  }, [data, clicked]);

  const onSearch = (searchTerm: string) => {
    const filteredItems = data.filter(
      (item) =>
        item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFiltered(filteredItems);
  };

  const onFind = () => {
    const clickedBtn = data.filter(
      (item) =>
        item.role.includes(clicked) ||
        item.level.includes(clicked) ||
        item.languages.includes(clicked) ||
        item.tools.includes(clicked)
    );

    setFiltered(clickedBtn);
  };

  return (
    <>
      <SearchBar onSearchChange={onSearch} />
      {loading ? <Loading /> : null}
      {error ? <Error /> : null}
      <Box
        p={5}
        mt={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {filtered.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={12}
            container
            alignItems="center"
            justifyContent="space-between"
            padding={"20px 30px"}
            sx={{
              backgroundColor: "white",
              boxShadow: "10px 10px 15px hsl(180, 29%, 50%, 0.6)",
              borderLeft: "5px solid white",
              transition: "all 0.3s",
              cursor: "pointer",
              "&:hover": {
                borderLeft: "5px solid hsl(180, 29%, 50%)",
              },
            }}
          >
            <Card product={product} clickBtn={setClicked} onFind={onFind} />
          </Grid>
        ))}
      </Box>
    </>
  );
};

export default CardListPage;
