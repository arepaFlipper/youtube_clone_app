import { useState, useEffect } from 'react';
import SideBar from './SideBar';
import { Box, Stack, Typography } from '@mui/material';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }} >
        <SideBar />
        <Typography className="copyriht" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyleft 🄯 2023 YouTube Clone
        </Typography>
      </Box>
    </Stack >
  )
}

export default Feed
