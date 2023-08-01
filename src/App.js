import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import './App.scss';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './Components';

const App = () => (
  <BrowserRouter>
    <Box flexDirection={'column'} sx={{ display: 'flex', backgroundColor: "#0f0f0f", width: "-webkit-fill-available", height: '100vh', overflow: 'hidden' }}>
      <Navbar />
      <Box height='calc(100vh - 56px)'>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </Box>
  </BrowserRouter>
)

export default App;
