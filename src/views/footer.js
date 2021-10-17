import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import {
  GitHub,
  Instagram,
  LinkedIn,
  MenuBook,
  SupervisedUserCircle,
} from "@mui/icons-material";
import logo from "../assets/GDSCLogo.png";

const footer = () => {
  return (
    <Box
      width={"100%"}
      px={{ xs: 2, sm: 3, lg: 4 }}
      style={{
        color: "#eee",
        backgroundColor: "#1976D2",
        padding: "1rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={6}>
          <Typography variant="h6" gutterBottom>
            Developed By:-
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <Avatar
                      alt="Lovish Tater"
                      src="https://avatars.githubusercontent.com/u/59690614?v=4"
                      sx={{ width: 56, height: 56 }}
                    />
                    Lovish Tater
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Poornima College of Engineering, Jaipur
                  </Typography>
                  <Button
                    size="small"
                    href="https://www.linkedin.com/in/lovishtater08/"
                    color="primary"
                  >
                    <LinkedIn />
                  </Button>
                  <Button
                    size="small"
                    href="https://github.com/lovishtater"
                    style={{ color: "#000" }}
                  >
                    <GitHub />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <Avatar
                      alt="Yuvraj Dagur"
                      src="https://avatars.githubusercontent.com/u/59970650?v=4"
                      sx={{ width: 56, height: 56 }}
                    />
                    Yuvraj Dagur
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Poornima Institute of Technology, Jaipur
                  </Typography>
                  <Button
                    href="https://www.linkedin.com/in/yuvraj-dagur/"
                    size="small"
                    color="primary"
                  >
                    <LinkedIn />
                  </Button>
                  <Button
                    href="https://github.com/thatfreakcoder"
                    size="small"
                    style={{ color: "#000" }}
                  >
                    <GitHub />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Typography variant="h6" gutterBottom>
            Source Code:-
          </Typography>
          <Card>
            <CardContent>
              <GitHub />
              <Typography variant="h6" gutterBottom>
                Github repository
              </Typography>
              <Button
                href="https://github.com/Google-Developer-Student-Club-Poornima/30DaysOfGoogleCloudDashboard"
                variant="outlined"
                sx={{ mb: 1 }}
              >
                Front-end Source Code
              </Button>
              <Button
                href="https://github.com/Google-Developer-Student-Club-Poornima/30DoGCP-dashboard-backend"
                variant="outlined"
                sx={{ mb: 1 }}
              >
                Back - end Source Code
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Typography variant="h6" gutterBottom color="primary">
            {"."}
          </Typography>
          <Card>
            <CardContent>
              <img src={logo} alt="logo" style={{ width: "93%" }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default footer;
