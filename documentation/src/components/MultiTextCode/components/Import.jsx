import React from "react";
import { Typography } from "@mui/material";

const Import = ({ what, from }) => {
  return (
    <Typography sx={{ color: "white" }}>
      <span style={{ color: "#65d8ef" }}>import</span>
      {"  "}
      {what}
      {"  "}
      <span style={{ color: "#65d8ef" }}>from</span>{" "}
      <span style={{ color: "#93ca33" }}>{`'${from}'`}</span>;
    </Typography>
  );
};

export default Import;
