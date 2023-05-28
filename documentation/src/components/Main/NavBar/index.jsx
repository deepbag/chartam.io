import React from "react";
import { Container, Typography, Box } from "@mui/material";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        background: "#f8fbfc",
        height: "60px",
        display: "flex",
        justfyContent: "space-between !important",
        alignItems: "center",
        zIndex: 100,
        width: "100%",
        borderBottom: "1px solid #f2f2f2",
        px: {
          lg: "80px !important",
        },
      }}
      maxWidth={false}
      className="headerMain"
    >
      <Box>
        <Typography sx={{ fontWeight: "700", color: "#545a67" }}>
          Data Analytics
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {_.map(
          [
            // {
            //   label: "Features",
            // },
            // { label: "Customers" },
            { label: "Documentation", path: "/getting-started/overview" },
          ],
          (item, index) => {
            return (
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#545a67",
                  pl: 3,
                  cursor: "pointer",
                }}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Typography>
            );
          }
        )}
      </Box>
    </Container>
  );
};

export default NavBar;
