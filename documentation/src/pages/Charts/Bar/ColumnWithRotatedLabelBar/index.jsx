import React from "react";
import { Box, Paper } from "@mui/material";
import PageHead from "components/PageHead";
import DefaultHead from "components/DefaultHead";

const ColumnWithRotatedLabelBar = () => {
  return (
    <Box sx={{}}>
      <PageHead
        label="Column with Rotated Labels"
        content="Beautiful bar chart with column with rotated labels category wised data."
      />
      <Paper
        variant="outlined"
        square
        sx={{
          p: "20px",
        }}
      >
        {/* <DefaultHead
          label="Quickstart"
          content="The following code snippet demonstrates a simple app that uses the chartamio component:"
          my="5px"
        /> */}

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

export default ColumnWithRotatedLabelBar;
