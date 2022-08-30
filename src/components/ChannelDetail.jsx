import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      fetchFromAPI(`channels?part=snippet&id=${id}`).then(data =>
        setChannelDetail(data?.items[0])
      );

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
        data => setVideos(data?.items)
      );
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <Box
          sx={{
            height: { xs: "220px", sm: "260px", md: "300px" },
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
      </Box>
      <Box sx={{ p: 2 }} className="container">
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
