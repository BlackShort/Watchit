import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const searchResult = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={searchResult}
      sx={{
        width: {sm:'53%',md:"40%"},
        height:{sm:'5.5vh'},
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1em",
        background: "transparent",
        borderRadius: "0.25em",
        border: "1px solid #3d3d3d",
        overflow: "hidden",
        padding: {sm:'0.2em 0.5em',md:"0 0.5em 0 0"},
      }}>
      <input
        type="text"
        spellCheck="false"
        placeholder="Search..."
        style={{
          width: "-webkit-fill-available",
          color: "white",
          background: "transparent",
          border: "none",
          outline: "none",
          padding: "0.5em",
          letterSpacing: "0.5px",
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <IconButton type='submit' aria-label='search'>
        <Search sx={{ fill: "#e3e3e3", cursor: "pointer" }} />
      </IconButton>
    </Paper>
  )
}
