import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Phone:
      </Typography>
      <Typography variant="h6">+1(804)874-8154</Typography>
      <Typography gutterBottom variant="h5" component="div" sx={{ mt: 3 }}>
        Email:
      </Typography>
      <Typography variant="h6">constox@gmail.com</Typography>
    </CardContent>
  </React.Fragment>
);

export default function ContactCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
