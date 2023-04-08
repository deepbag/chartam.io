import React from "react";
import { Typography } from "../../../../node_modules/@mui/material/index";

const Function = ({ name, children }) => {
  return (
    <Typography sx={{ paddingTop: "15px" }}>
      <span style={{ color: "#65d8ef" }}>export default function</span> {name}(){" "}
      {"{"}
      <br />
      <span style={{ paddingLeft: "20px" }}>
        return (<br />
        {children}
        <br />
        <span style={{ paddingLeft: "20px" }}>)</span>
        <br />
        {"}"}
      </span>
    </Typography>
  );
};

export default Function;
