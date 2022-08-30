import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = e => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "400px",
        mr: "16px",
      }}
    >
      <InputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "Search" }}
        type="search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton
        type="submit"
        sx={{ px: "10px", color: "#f70000" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
