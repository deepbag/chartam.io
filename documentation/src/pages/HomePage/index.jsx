import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <Container
      sx={{
        zIndex: 100,
        width: "100%",
        px: {
          lg: "80px !important",
        },
      }}
      maxWidth={false}
    >
      <Hero />
      <Grid container>
        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{
              fontWeight: "500",
              color: "#00000",
              fontSize: {
                lg: "30px",
                xs: "25px",
              },
              lineHeight: "40px",
              my: 1,
              textAlign: "center",
            }}
          >
            Empower Your Business with Trustworthy Data Insights
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#3f3f3f",
              lineHeight: "26px",
              my: 1,
              fontWeight: "300",
              textAlign: "center",
              px: {
                lg: "250px",
              },
              mb: 5,
            }}
          >
            Our platform offers powerful and advanced analytics capabilities
            that enable you to extract actionable insights from your data. From
            data visualization to machine learning, our platform equips you with
            the tools to analyze, interpret, and leverage data to make informed
            decisions and drive business growth.
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
};

export default HomePage;
