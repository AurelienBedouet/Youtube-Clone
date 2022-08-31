import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map(category => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background:
            category.name === selectedCategory &&
            "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
          color: category.name === selectedCategory ? "#f8f9fa" : "#24262e",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#f8f9fa" : "#bc00dd",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
