// File: /src/pages/Sermons.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import SermonsCard from "../components/SermonsCard";

const sermons = [
  {
    title: "The Power of Faith",
    videoUrl: "https://www.youtube.com/embed/6vYnas6q3Sg",
    description: "Discover how faith can move mountains in your life.",
    preacher: "Rev. John Doe",
    date: "2024-06-01",
  },
  {
    title: "Walking in Love",
    videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    description: "A message on the importance of love in the Christian walk.",
    preacher: "Pastor Jane Smith",
    date: "2024-05-25",
  },
  {
    title: "Overcoming Doubt",
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    description: "How to overcome doubt and trust God in every situation.",
    preacher: "Rev. John Doe",
    date: "2024-05-18",
  },
];

const Sermons = () => (
  <Box sx={{ mt: 7, mb: 0, width: '100%', px: { xs: 2, md: 4 } }}>
    <Typography variant="h5" fontWeight={700} mb={1} color="#333" sx={{ fontSize: { xs: 22, md: 26 } }}>
      Sermons
    </Typography>
    <Typography variant="subtitle2" color="text.secondary" mb={3} sx={{ fontSize: { xs: 15, md: 16 }, fontWeight: 400 }}>
      Watch and listen to the latest sermons and messages from Nairobi Chapel Ngong Road.
    </Typography>
    {sermons.length === 0 ? (
      <Typography variant="body2" color="text.secondary">
        Nothing at the moment
      </Typography>
    ) : (
      <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
        {sermons.map((sermon, idx) => (
          <Box key={idx} sx={{ flex: '1 1 320px', maxWidth: 345, minWidth: 260, display: 'flex' }}>
            <SermonsCard {...sermon} idx={idx} />
          </Box>
        ))}
      </Box>
    )}
  </Box>
);

export default Sermons;
