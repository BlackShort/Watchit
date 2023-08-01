import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  const seeMore = () => {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("showbtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "see more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "see less";
      moreText.style.display = "inline";
    }
  }



  return (
    <Stack direction={{ xs: "column", md: "row" }} gap={'2em'} p={{ sm: '0', md: '2em' }} height={'calc(100vh - 56px)'}>
      <Box flex={3} sx={{ overflowX: 'scroll', justifyContent: "start", alignItems: 'start' }}>
        <Box sx={{ width: "100%", }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}?autoplay=1`}
            className="react-player"
            controls
            autoplay
            width='-webkit-fill-available'
          />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${channelId}`}>
              <Typography
                variant={{ sm: "subtitle1", md: "h6" }}
                color="#fff"
              >
                {channelTitle}
                <CheckCircleIcon
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
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
          <Typography variant='subtitle1' color="#fff">{description.slice(0, 300)}<span id="dots">...</span> <span id="more" style={{display:'none'}}>{description.slice(300,)}</span> <span id="showbtn" style={{cursor:'pointer', color:'dodgerblue'}} onClick={seeMore}>show more</span></Typography>

        </Box>
      </Box>
      <Box
        flex={1}
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
        sx={{ overflowX: 'scroll' }}
      >
        <Videos videos={videos} direction="column" />
      </Box>
    </Stack>
  )
}
