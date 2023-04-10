import React from "react";
import { Box, Typography } from "@mui/material";

const DefaultHead = ({ label, content, mb = "20px" }) => {
  return (
    <Box sx={{ mb: mb }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "500",
          fontSize: "20px",
          my: "10px",
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "300",
          fontSize: "15px",
          mb: "20px",
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default DefaultHead;
