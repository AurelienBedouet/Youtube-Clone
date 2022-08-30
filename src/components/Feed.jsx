import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      direction={{ md: "row" }}
      sx={{ mt: { xs: "24px", md: 0 } }}
      className="container"
    >
      <Box
        sx={{
          borderRight: "1px solid #24262e",
          p: { sx: 0, md: "32px 32px 0 0" },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box py={4} pl={{ xs: 0, md: "48px" }} sx={{ overflowY: "auto" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
          sx={{ color: "#f70000" }}
        >
          {selectedCategory} <span style={{ color: "#000" }}>videos</span>
        </Typography>

        <Videos
          videos={videos}
          justifyContent={{ xs: "center", md: "start" }}
        />
      </Box>
    </Stack>
  );
};

export default Feed;
