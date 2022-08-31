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
    <Box className="container">
      <Stack direction={{ md: "row" }} sx={{ mt: { xs: "24px", md: 0 } }}>
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

        <Box
          py={4}
          pl={{ xs: 0, md: "48px" }}
          sx={{ overflowY: "auto", textAlign: { xs: "center", md: "start" } }}
        >
          <Typography variant="h4" fontWeight="bold" mb={4}>
            <span className="text-gradient">{selectedCategory}</span>{" "}
            <span style={{ color: "#24262e" }}>videos</span>
          </Typography>

          <Videos
            videos={videos}
            justifyContent={{ xs: "center", md: "start" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Feed;
