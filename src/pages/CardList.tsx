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

  useEffect(() => {
    setFiltered(data);
  }, [data]);

  const onSearch = (searchTerm: string) => {
    const filteredItems = data.filter(
      (item) =>
        item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFiltered(filteredItems);
  };

  return (
    <>
      <SearchBar onSearchChange={onSearch} />
      {loading ? <Loading /> : null}
      {error ? <Error /> : null}
      <Box p={5} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {filtered.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={12}
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Card product={product} />
          </Grid>
        ))}
      </Box>
    </>
  );
};

export default CardListPage;
