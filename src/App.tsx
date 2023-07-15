import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Feed, VideoDetail, SearchFeed } from './components';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Box sx={{ background: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<VideoDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router >
  )
}

export default App
