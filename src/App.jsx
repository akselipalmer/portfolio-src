import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MediaCard from "./components/MediaCard";
import { Avatar, Divider } from "@mui/material";
import AvatarImg from "../src/assets/Avatar.jpg";
import MySchool from "./components/MySchool";
import DataObjectIcon from "@mui/icons-material/DataObject";

export default function Album() {
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
                alt="Akseli Palmer"
                src={AvatarImg}
                sx={{ width: 156, height: 156 }}
              />
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
          {/* <Divider sx={{ pt: 6 }} />
          <MyWork /> */}
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
        {/* <Copyright /> */}
      </Box>
    </Box>
  );
}
