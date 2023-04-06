import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { toast } from "react-hot-toast";

const MultiTextCode = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        background: "#121212",
        p: "15px 25px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "white",
        }}
      >
        {children}
      </Typography>
      <Button
        variant="outlined"
        // onClick={() =>
        //   navigator.clipboard.writeText(content).then(() => {
        //     toast.success("Code Copy Successfully");
        //   })
        // }
      >
        Copy
      </Button>
    </Paper>
  );
};

export default MultiTextCode;
