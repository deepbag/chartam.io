import React from "react";
import { Box, Paper } from "@mui/material";
import PageHead from "components/PageHead";
import DefaultHead from "components/DefaultHead";
import Iframe from "components/Iframe/index";
import PaperCustom from "components/PaperCustom/index";

const Usage = () => {
  return (
    <Box sx={{}}>
      <PageHead
        label="Getting Started - Usage"
        content="Learn the basics of working with chartam.io components."
      />
      <PaperCustom>
        <DefaultHead
          label="Quickstart"
          content="The following code snippet demonstrates a simple app that uses the chartamio component:"
          mb="5px"
        />
        <Iframe src="https://stackblitz.com/edit/react-a2olzr?embed=1&file=src/Chartam.js&hideExplorer=1&theme=dark" />
      </PaperCustom>
    </Box>
  );
};

export default Usage;
