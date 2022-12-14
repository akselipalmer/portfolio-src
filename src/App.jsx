import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MediaCard from "./components/MediaCard";
import { Avatar, Divider } from "@mui/material";
import AvatarImg from "../src/assets/Avatar.jpg";
import MyWork from "./components/MyWork";
import MySchool from "./components/MySchool";
import DataObjectIcon from "@mui/icons-material/DataObject";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ContactCard from "./components/ContactCard";

export default function Album() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <AppBar position="relative">
        <Toolbar>
          <DataObjectIcon fontSize="large" />
          <Typography variant="h6" color="inherit" noWrap sx={{ ml: 2 }}>
            Akseli Palmer Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Box>
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Hi! I am
              </Typography>
              <Typography
                component="h2"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Akseli Palmer!
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                I am a Full Stack Web Developer! I love building amazing
                projects. I've been interning and building projects at Kallio
                Tech. I am currently looking for a new position.
              </Typography>
            </Box>
            <Stack alignItems="center">
              <Avatar
                alt="Remy Sharp"
                src={AvatarImg}
                sx={{ width: 156, height: 156 }}
              />

              <Button onClick={handleToggle} sx={{ mt: 5 }} variant="contained">
                CONTACT ME
              </Button>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                onClick={handleClose}
              >
                <ContactCard />
              </Backdrop>
            </Stack>
          </Container>
        </Box>
        <Container maxWidth="lg">
          <Divider />
          <Typography
            pt={6}
            component="h3"
            variant="h4"
            align="left"
            color="text.primary"
            gutterBottom
          >
            Checkout My Work
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
          <Divider sx={{ pt: 6 }} />
          <MyWork />
          <Divider sx={{ pt: 6 }} />
          <MySchool />
        </Container>
      </main>
      {/* Footer */}
      <Box
        sx={{
          bgcolor: "background.paper",
          p: 6,
          display: "flex",
          justifyContent: "center",
        }}
        component="footer"
      >
        <Button onClick={handleToggle} sx={{ mt: 5 }} variant="contained">
          CONTACT ME
        </Button>
        {/* <Copyright /> */}
      </Box>
    </Box>
  );
}
