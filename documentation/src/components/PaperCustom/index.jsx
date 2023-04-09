import React from "react";
import { Paper } from "@mui/material";

const PaperCustom = ({ children }) => {
  return (
    <Paper
      variant="outlined"
      square
      sx={{
        p: "20px",
        mb: "10px",
      }}
    >
      {children}
    </Paper>
  );
};

export default PaperCustom;
