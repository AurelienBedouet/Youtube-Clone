import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => (
  <Box
    sx={{
      width: { xs: "280px", sm: "360px", md: "320px" },
      height: { xs: "260px", sm: "300px" },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #24262e",
      borderRadius: "5px",
    }}
  >
    <CircularProgress />
  </Box>
);

export default Loader;
