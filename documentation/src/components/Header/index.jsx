import { Container, Typography, Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Container
      sx={{
        background: "#343541",
        height: "60px",
        display: "flex",
        justfyContent: "space-between !important",
        alignItems: "center",
        zIndex: 100,
        width: "100%",
      }}
      maxWidth={false}
      className="headerMain"
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
      <Box>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "200",
            color: "black",
            background: "#aee892",
            p: "0 15px"
          }}
        >
          We are still developing documentation
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;
