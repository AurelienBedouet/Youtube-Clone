import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { Typography, Box, Stack } from "@mui/material";
import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(data =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      data => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }} className="container">
        <Box flex={1} pt={{ xs: "8px", sm: "16px", md: "0" }}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "88px",
              right: { xs: "16px", md: 0 },
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#24262e"
              component="h5"
              fontSize={{ xs: "16px", sm: "18px", md: "20px", xl: "22px" }}
              fontWeight="bold"
              lineHeight={1.3}
              p={1}
              mt={{ xs: 1, xl: 2 }}
            >
              {title.slice(0, 100)}
              {title.length > 100 ? "..." : ""}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ color: "#24262e" }}
              p={1}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  fontSize={{ sm: "14px", md: "16px" }}
                  color="#24262e"
                  display="flex"
                  alignItems="center"
                  border="1px solid #24262e"
                  borderRadius={1}
                  p={1}
                >
                  {channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={{ xs: 0, md: 2 }}
          mt={{ xs: 8, md: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction={{ xs: "row", md: "column" }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
