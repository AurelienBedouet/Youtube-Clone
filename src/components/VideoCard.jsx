import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import sanitizeHtml from "sanitize-html";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const dirty = `${snippet?.title.slice(0, 75)}`;
  const clean = sanitizeHtml(dirty);
  return (
    <Card
      className="video-card"
      elevation={4}
      sx={{
        width: { xs: "280px", sm: "360px", md: "320px" },
        height: { xs: "260px", sm: "300px" },
        backgroundColor: "#24262e",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: { xs: "280px", sm: "360px", md: "320px" },
            height: { xs: "150px", sm: "180px" },
          }}
        />
      </Link>
      <CardContent>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
            lineHeight="1.4"
          >
            {`${clean} ${snippet.title.length > 60 ? "..." : ""}` ||
              demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
