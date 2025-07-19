import React from "react";
import { Box, Typography } from "@mui/material";
import NoticesCard from "../components/NoticesCard";

const notices = [
  {
    title: "Sunday Service Times",
    subtitle: "Every Sunday",
    description: "Join us at 9:00am and 11:30am for worship and fellowship.",
    category: "Worship",
    buttonLabel: "Details",
  },
  {
    title: "Youth Bible Study",
    subtitle: "Fridays at 6:00pm",
    description: "All teens welcome in the Youth Hall!",
    category: "Youth",
    buttonLabel: "Learn More",
  },
  {
    title: "Community Outreach",
    subtitle: "Monthly Program",
    description: "Volunteer for our outreach program. Let's make a difference!",
    category: "Outreach",
    buttonLabel: "Sign Up",
  },
  {
    title: "Prayer Meeting",
    subtitle: "Wednesdays at 7:00pm",
    description: "Join us in the main sanctuary. All are invited.",
    category: "Prayer",
    buttonLabel: "Join",
  },
];

const Notices = () => (
  <Box sx={{ mt: 7, mb: 0, width: '100%', px: { xs: 2, md: 4 } }}>
    <Typography variant="h5" fontWeight={700} mb={1} color="#333" sx={{ fontSize: { xs: 22, md: 26 } }}>
      Notices
    </Typography>
    <Typography variant="subtitle2" color="text.secondary" mb={3} sx={{ fontSize: { xs: 15, md: 16 }, fontWeight: 400 }}>
      Stay up to date with the latest church news, events, and important announcements.
    </Typography>
    {notices.length === 0 ? (
      <Typography variant="body2" color="text.secondary">
        Nothing at the moment
      </Typography>
    ) : (
      <Box display="flex" flexWrap="wrap" gap={2}>
        {notices.map((notice, idx) => (
          <NoticesCard key={idx} {...notice} idx={idx} />
        ))}
      </Box>
    )}
  </Box>
);

export default Notices;
