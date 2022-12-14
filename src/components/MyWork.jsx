import { Box, Container, Typography } from "@mui/material";
import React, { Component } from "react";

export default function MyWork() {
  const history = [
    {
      jobTitle: "Front End Developer",
      location: "Kalio Tech",
      description:
        "I'm currently working as a Front End Developer at Kalio Tech. I'm working on an Adventure application that connects explorers with local adventures. I've linked the page in my projects.",
    },
    {
      jobTitle: "SERVER",
      location: "Sunset Grill | Manakin, VA",
      description:
        "Cultivated warm relationships with regular customers. Displayed enthusiasm and promoted excellent service to customers, successfully increasing referrals and walk-in business. Quickly and clearly communicated dining orders to kitchen staff, directing attention to special requests or dietary restrictions",
    },
    {
      jobTitle: "INTERN",
      location:
        "Real Estate Investor, Pastor, Director Non Profit | Petersburg, VA",
      description:
        "Identified plans and resources required to meet project goals and objectives. Managed projects from procurement to commission. Maximized productivity by analyzing protocols and identifying areas for improvement. Encouraged everyone to cultivate strong work ethic by demonstrating diligence, patience and respect for others. Explained technical information in clear terms to non-technical individuals to promote better understanding.",
    },
    {
      jobTitle: "SUB CONTRACTOR (CONSTRUCTION)",
      location: "Owner Of Ox Construction LLC | Harrisburg, PA",
      description:
        "Delivered outstanding service to customers to maintain and extend relationships for future business opportunities. Worked with more knowledgeable professionals to grow understanding of principles and construction standards. Worked independently in fast-paced environment while meeting productivity and quality expectations.",
    },
  ];

  function DisplayWorkHistory() {
    return history.map((job) => {
      return (
        <Box key={job.jobTitle}>
          <Typography
            pt={3}
            component="h3"
            variant="h5"
            align="left"
            color="text.primary"
            gutterBottom
          >
            {job.jobTitle}
          </Typography>
          <Typography
            pt={0}
            component="h4"
            variant="h6"
            align="left"
            color="text.primary"
            gutterBottom
          >
            {job.location}
          </Typography>
          <Typography
            pt={1}
            component="p"
            variant="subtitle1"
            align="left"
            color="text.primary"
            gutterBottom
          >
            {job.description}
          </Typography>
        </Box>
      );
    });
  }
  return (
    <>
      <Typography
        pt={6}
        component="h3"
        variant="h4"
        align="left"
        color="text.primary"
        gutterBottom
      >
        Work History
      </Typography>
      <DisplayWorkHistory />
    </>
  );
}
