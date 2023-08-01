import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  }, 
}) => {


  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "-webkit-fill-available" },
        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "transparent",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ height: 180, borderRadius: '12px'}}
        />
      </Link>

      <CardContent sx={{ flexDirection: 'column', backgroundColor: "transparent", paddingLeft: "4px", }}>
        <Link to={videoId ? `/video/${videoId}` : ''}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || ''}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : ''
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || ''}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
