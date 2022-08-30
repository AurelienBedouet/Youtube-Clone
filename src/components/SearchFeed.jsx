import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(data =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh" className="container">
      <Typography
        component="h4"
        fontSize={{ xs: "26px", sm: "32px" }}
        fontWeight={900}
        color="#24262e"
        m={"50px 0"}
        textAlign="center"
      >
        Search Results for{" "}
        <span style={{ color: "#F70000" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">{<Videos videos={videos} />}</Box>
    </Box>
  );
};

export default SearchFeed;
