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
    <Stack direction={{ md: "row" }}>
      <Box
        sx={{
          borderRight: "1px solid #3d3d3d",
          p: { sx: 0, md: "8px 32px 0 16px" },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box p={2} ml={{ xs: 0, md: "48px" }} sx={{ overflowY: "auto" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
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
