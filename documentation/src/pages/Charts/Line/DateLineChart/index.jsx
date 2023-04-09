import React from "react";
import { Box, Paper } from "@mui/material";
import PageHead from "components/PageHead";
import DefaultHead from "components/DefaultHead";

const DateLineChart = () => {
  return (
    <Box sx={{}}>
      <PageHead
        label="Simple Date Line Graph"
        content="Line graph (also known as Line chart) displays series of data points connected by straight line segments."
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
          src="https://stackblitz.com/edit/react-nm1pgy?embed=1&file=src/Line.js&hideExplorer=1&theme=dark"
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

export default DateLineChart;
