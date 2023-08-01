import React, { useContext, useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import { StateContextApi } from './contexApi';

export const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videos, setVideos] = useState(null);

  const { openMenu } = useContext(StateContextApi);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))

  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' }, height: 'calc(100vh - 56px)' }}>
      {openMenu ?
        <Box flex={1} sx={{ overflowY: 'scroll', transition: '0.3s' }}>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </Box>
        :
        <Box flex={1} sx={{ overflowY: 'scroll', transition: '0.3s' }}>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </Box>
      }
      <Box flex={openMenu ? '18' : "5"} p={'2em'} sx={{ overflowX: 'scroll' }}>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}
