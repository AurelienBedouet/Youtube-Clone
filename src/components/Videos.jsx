import React, { useState } from "react";
import { Stack, Box, Button } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction, justifyContent }) => {
  const [itemsToShow, setItemsToShow] = useState(24);
  const [expanded, setExpanded] = useState(false);

  const showMore = () => {
    if (itemsToShow === 24) {
      setItemsToShow(videos.length);
      setExpanded(true);
    } else {
      setItemsToShow(24);
      setExpanded(false);
    }
  };

  if (!videos?.length) return <Loader />;

  return (
    <Stack alignItems="center" spacing={4} mb="32px">
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent={justifyContent || "center"}
        alignItems="start"
        gap={4}
      >
        {videos.slice(0, itemsToShow).map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
      <Box>
        <Button
          onClick={showMore}
          variant="contained"
          className="show-more-btn"
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      </Box>
    </Stack>
  );
};

export default Videos;
