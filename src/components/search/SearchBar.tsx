import React, { FormEvent, useRef } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  onSearchChange: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearchChange }) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    const searchTerm = searchRef.current?.value || "";
    onSearchChange(searchTerm);

    if (searchRef.current) {
      searchRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <TextField
        inputRef={searchRef}
        label="Search"
        variant="outlined"
        color="success"
        placeholder="Search"
        InputProps={{
          startAdornment: <SearchIcon style={{ color: "black" }} />,
        }}
        sx={{
          width: "500px",
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </form>
  );
};

export default SearchInput;
