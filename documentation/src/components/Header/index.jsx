import { Container, Typography, Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Container
      sx={{
        background: "#343541",
        height: "60px",
        display: "flex",
        alignItems: "center",
      }}
      maxWidth={false}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "800",
            color: "white",
          }}
        >
          chartam.io
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;
