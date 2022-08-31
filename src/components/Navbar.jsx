import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./";

const Navbar = () => (
  <Box
    sx={{
      backgroundColor: "#24262E",
      boxShadow: "0 4px 4px 0 rgba(0,0,0,.3)",
      position: "sticky",
      top: 0,
      zIndex: 10,
    }}
  >
    <Stack
      className="container"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      gap={{ xs: 2, sm: 0 }}
      py={1}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <Typography fontSize="18px" noWrap component="div" className="logo">
          YTC
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  </Box>
);

export default Navbar;
