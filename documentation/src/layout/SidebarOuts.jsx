import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Header from "components/Header";
import Sidebar from "components/Sidebar";

const SidebarOuts = ({ children }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        m: {
          sm: 0,
        },
        p: {
          sm: 0,
        },
      }}
    >
      <Header />
      <Grid container>
        <Grid item lg={2}>
          <Sidebar />
        </Grid>
        <Grid
          item
          lg={10}
          sx={{
            height: "100vh",
            overflowY: "scroll",
            p: "20px 20px 80px 20px"
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SidebarOuts;
