import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import adventureImg from "../assets/adventure-img.png";
import quizzicalImg from "../assets/Quzzical.png";

export default function MediaCard() {
  const cards = [
    {
      img: adventureImg,
      title: "Adventure App",
      description: "Here is an app that I am currently developing.",
      link: "https://clinquant-hamster-d1a966.netlify.app/",
    },
    {
      img: quizzicalImg,
      title: "Quizzical Game!",
      description:
        "Here's a little quiz game I made as a solo project while I was enrolled in Scrimba Front End Development Course.",
      link: "https://quizzical-solo-project.netlify.app/",
    },
  ];

  function DisplayCards() {
    return cards.map((card) => {
      return (
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
      );
    });
  }

  return <DisplayCards />;
}
