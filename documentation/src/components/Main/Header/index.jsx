import { Container, Typography, Box } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
      className="headerMain main-block"
    >
      <Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "800",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          chartamio
        </Typography>
      </Box>
      <Box>
        {/* {!downsm && ( */}
        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              md: "15px",
            },
            fontWeight: "200",
            color: "black",
            background: "#aee892",
            p: {
              xs: "0 5px",
              md: "0 15px",
            },
          }}
        >
          We are still developing documentation
        </Typography>
        {/* )} */}
      </Box>
    </Container>
  );
};

export default Header;
