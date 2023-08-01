import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

export const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap='1em'>
      {videos.map((item, idx) => (
        <Box key={idx} flex={{sm:'0 1 100%',md:'0 1 32.3%'}} sx={{ height:'300px'}}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}
