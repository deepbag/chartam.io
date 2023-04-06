import React from "react";
import { Box, Paper } from "@mui/material";
import PageHead from "components/PageHead";
import DefaultHead from "components/DefaultHead/index";

const Usage = () => {
  return (
    <Box sx={{}}>
      <PageHead
        label="Getting Started - Usage"
        content="Learn the basics of working with chartam.io components."
      />
      <Paper
        variant="outlined"
        square
        sx={{
          p: "20px",
        }}
      >
        <DefaultHead
          label="Quickstart"
          content="The following code snippet demonstrates a simple app that uses the chartamio component:"
          my="5px"
        />

        <iframe
          src="https://stackblitz.com/edit/react-a2olzr?embed=1&file=src/Chartam.js&hideExplorer=1&theme=dark"
          style={{
            width: "100%",
            height: "600px",
            border: "none",
          }}
        />  
      </Paper>
    </Box>
  );
};

export default Usage;
