import React from "react";
import { Container } from "@mui/material";
import Header from "components/Main/Header";
import HomePage from "pages/HomePage";
import NavBar from "components/Main/NavBar";

const MainLayout = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        m: {
          xs: 0,
        },
        p: {
          xs: 0,
        },
      }}
    >
      <Header />
      <NavBar />
      <HomePage />
    </Container>
  );
};

export default MainLayout;
