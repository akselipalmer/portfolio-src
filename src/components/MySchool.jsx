import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import ScrimbaImg from "../assets/ScrimbaImg.webp";
import WorldImg from "../assets/worldImg.jpg";

export default function MySchool() {
  const education = [
    {
      schoolName: "Scrimba",
      educationType: "Front End Development",
      description:
        "Studied Front End Development. I completed over 70 hours of top-notch tutorials, hundreds of coding challenges, and dozens of real-world projects.",
      img: ScrimbaImg,
      alt: "Scrimba Logo",
      href: "https://scrimba.com/",
    },
    {
      schoolName: "Global Awakening",
      educationType: "Leadership",
      description:
        "Studied for 3 years. The 1st year was spent on personal development. 2nd year I focused on building leadership skills. 3rd year I applied the knowledge I had learned and Interned in a leadership role in a church in Northern Ireland.",
      img: WorldImg,
      alt: "Map of World",
      href: "https://globalawakening.com/",
    },
  ];

  function MediaCard() {
    return education.map((education) => {
      return (
        <Card key={education.schoolName} sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {education.schoolName}
            </Typography>
            <CardMedia
              component="img"
              height="140"
              image={education.img}
              alt={education.alt}
            />
            <Typography gutterBottom variant="h6" component="div">
              {education.educationType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {education.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={education.href}>
              Learn More
            </Button>
          </CardActions>
        </Card>
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
        Education History
      </Typography>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 5, md: 10, lg: 20 }}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        pb={6}
      >
        <MediaCard />
      </Stack>
    </>
  );
}
