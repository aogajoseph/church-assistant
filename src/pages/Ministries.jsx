// File: /src/pages/Ministries.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import MinistriesCard from "../components/MinistriesCard";
import FrontlineMinistryCard from "../components/FrontlineMinistryCard";

const ministries = [
  {
    title: "Children’s Ministry",
    subheader: "Ages 3-12",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Fun, faith-filled activities and Bible lessons for children.",
    details: "We meet every Sunday during both services. Our teachers are passionate about helping kids grow in faith!",
  },
  {
    title: "Youth & Teens",
    subheader: "Ages 13-19",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "A vibrant community for teens to connect, learn, and serve.",
    details: "Friday night hangouts, Bible study, and outreach events. All teens welcome!",
  },
  {
    title: "Men’s Fellowship",
    subheader: "All men welcome",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "Building strong men of faith through fellowship and service.",
    details: "Monthly breakfasts, prayer meetings, and service projects.",
  },
  {
    title: "Women of Faith",
    subheader: "All women welcome",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    description: "Encouraging women to grow in faith and community.",
    details: "Weekly Bible study, support groups, and special events.",
  },
  {
    title: "Music Ministry",
    subheader: "Choir & Band",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
    description: "Leading worship and praise through music.",
    details: "Join our choir or band and help lead the congregation in worship!",
  },
  {
    title: "Hospitality Team",
    subheader: "Welcoming & Serving",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80",
    description: "Creating a warm, welcoming environment for all.",
    details: "Help greet, usher, and serve refreshments at church events.",
  },
  {
    title: "Outreach Ministry",
    subheader: "Community Service",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description: "Serving our local community through acts of love.",
    details: "Participate in food drives, visits, and community projects.",
  },
];

const frontlineMinistries = [
  {
    title: "Echo Africa",
    subheader: "Mission Outreach",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Transforming lives across Africa through missions, education, and empowerment.",
    details: "Echo Africa partners with local churches and organizations to bring hope and resources to underserved communities.",
  },
  {
    title: "One Lamb",
    subheader: "Rescue & Restoration",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description: "Rescuing, restoring, and empowering vulnerable children and families.",
    details: "One Lamb provides safe homes, education, and spiritual care for children in need.",
  },
  {
    title: "Safe Families",
    subheader: "Family Support",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "Supporting families in crisis with love, care, and practical help.",
    details: "Safe Families connects volunteers with families to provide temporary care and support during difficult times.",
  },
  {
    title: "Tumaini Clinics",
    subheader: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    description: "Providing quality healthcare and hope to communities in need.",
    details: "Tumaini Clinics offer medical care, counseling, and health education to underserved populations.",
  },
];

const Ministries = () => (
  <Box sx={{ mt: 7, mb: 0, width: '100%', px: { xs: 2, md: 4 } }}>
    <Typography variant="h5" fontWeight={700} mb={1} color="#333" sx={{ fontSize: { xs: 22, md: 26 } }}>
      Ministries
    </Typography>
    <Typography variant="subtitle2" color="text.secondary" mb={3} sx={{ fontSize: { xs: 15, md: 16 }, fontWeight: 400 }}>
      Discover the various ministries at Nairobi Chapel and find your place to serve, grow, and connect.
    </Typography>
    <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ fontSize: { xs: 16, md: 18 }, color: '#7F00FF' }}>
      Frontline Ministries
    </Typography>
    <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
      {frontlineMinistries.map((ministry, idx) => (
        <FrontlineMinistryCard key={idx} {...ministry} idx={idx} />
      ))}
    </Box>
    <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ fontSize: { xs: 16, md: 18 }, color: '#7F00FF' }}>
      Other Ministries
    </Typography>
    {ministries.length === 0 ? (
      <Typography variant="body2" color="text.secondary">
        Nothing at the moment
      </Typography>
    ) : (
      <Box display="flex" flexWrap="wrap" gap={2}>
        {ministries.map((ministry, idx) => (
          <Box key={idx} sx={{ flex: '1 1 320px', maxWidth: 345, minWidth: 260, display: 'flex' }}>
            <MinistriesCard {...ministry} idx={idx} />
          </Box>
        ))}
      </Box>
    )}
  </Box>
);

export default Ministries;
