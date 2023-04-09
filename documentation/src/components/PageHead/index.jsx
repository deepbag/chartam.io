import React from "react";
import { Box, Typography } from "@mui/material";

const PageHead = ({ label, content }) => {
  return (
    <Box sx={{ mb: "20px" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "600",
          fontSize: "30px",
          mb: "10px",
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "300",
          fontSize: "18px",
          mb: "10px",
          lineHeight: "28px"
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default PageHead;
