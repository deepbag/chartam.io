import React from "react";
import { Box, Paper } from "@mui/material";
import PageHead from "components/PageHead";
import DefaultHead from "components/DefaultHead";
import Iframe from "components/Iframe/index";
import PaperCustom from "components/PaperCustom/index";

const ColumnWithRotatedLabelBar = () => {
  return (
    <Box sx={{}}>
      <PageHead
        label="Column with Rotated Labels"
        content="Beautiful bar chart with column with rotated labels category wised data."
      />
      <PaperCustom>
        {/* <DefaultHead
          label="Quickstart"
          content="The following code snippet demonstrates a simple app that uses the chartamio component:"
          my="5px"
        /> */}

        <Iframe src="https://stackblitz.com/edit/react-a2olzr?embed=1&file=src/Chartam.js&hideExplorer=1&theme=dark" />
      </PaperCustom>
    </Box>
  );
};

export default ColumnWithRotatedLabelBar;
