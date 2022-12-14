import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import adventureImg from "../assets/adventure-img.png";
import quizzicalImg from "../assets/Quzzical.png";
import { Stack } from "@mui/system";

export default function MediaCard() {
  const cards = [
    {
      img: adventureImg,
      title: "Adventure App",
      description:
        "This project is in the middle of development. Many components haven't been plugged in yet or aren't functional. But it's the basic layout.",
      link: "https://clinquant-hamster-d1a966.netlify.app/",
      moreInfo:
        "I'm building this using React, Material UI, Firebase & React Router.",
    },
    {
      img: quizzicalImg,
      title: "Quizical Game!",
      description:
        "Here's a little quiz game I made as a solo project while I was enrolled in Scrimba Front End Development Course.",
      link: "https://quizzical-solo-project.netlify.app/",
      moreInfo:
        "I built this using React. It interacts with the Open Trivia Database.",
    },
  ];

  function DisplayCards() {
    let count = 0;
    return cards.map((card) => {
      count++;

      return (
        <Stack
          key={card.title}
          sx={{ width: "100%" }}
          direction={{
            xs: "column",
            sm: "column",
            md: count % 2 == 0 ? "row-reverse" : "row",
          }}
          spacing={{ xs: 2, sm: 4, md: 6 }}
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="center"
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={card.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={card.link}>
                Check it out
              </Button>
            </CardActions>
          </Card>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ maxWidth: 345, textAlign: "center" }}
          >
            {card.moreInfo}
          </Typography>
        </Stack>
      );
    });
  }

  return (
    <Stack direction="column" spacing={6} sx={{ width: "100%" }}>
      <DisplayCards />
    </Stack>
  );
}
