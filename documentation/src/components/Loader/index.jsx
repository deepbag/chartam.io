import * as React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = ({ label }) => {
  return (
    <Typography sx={{ textAlign: "center", height: "100px" }}>
      <CircularProgress disableShrink style={{ color: "#202123" }} />
      <Typography
        sx={{
          fontWeight: "400",
          mt: "15px",
        }}
      >
        {label}
      </Typography>
    </Typography>
  );
};

export default Loader;
