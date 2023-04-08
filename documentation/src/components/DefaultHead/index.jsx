import React from "react";
import { Box, Typography } from "@mui/material";

const DefaultHead = ({ label, content, my = "20px" }) => {
  return (
    <Box sx={{ my: my }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "500",
          fontSize: "20px",
          mb: "10px",
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "300",
          fontSize: "15px",
          mb: "10px",
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default DefaultHead;
