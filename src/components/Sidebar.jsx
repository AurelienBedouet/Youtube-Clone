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
          background: category.name === selectedCategory && "#F70000",
          color: category.name === selectedCategory ? "#f8f9fa" : "#24262e",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#f8f9fa" : "#f70000",
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
