import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function MySchool() {
  const education = [
    {
      schoolName: "LinkedIn",
      img: LinkedInIcon,
      href: "https://www.linkedin.com/in/akseli-palmer-666116122/",
    },
    {
      schoolName: "GitHub",
      img: GitHubIcon,
      href: "https://github.com/akselipalmer",
    },
  ];

  function MediaCard() {
    return education.map((education) => {
      return (
        <Button
          size="large"
          variant="outlined"
          startIcon={<education.img />}
          key={education.schoolName}
          href={education.href}
        >
          {education.schoolName}
        </Button>
      );
    });
  }

  return (
    <>
      <Typography
        pt={6}
        component="h3"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Contact Me
      </Typography>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 5, md: 10, lg: 20 }}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        pb={6}
        pt={6}
      >
        <MediaCard />
      </Stack>
    </>
  );
}
