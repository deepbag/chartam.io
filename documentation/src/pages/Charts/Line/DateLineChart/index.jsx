import React, { useRef } from "react";
import { Box } from "@mui/material";
import PageHead from "components/PageHead";
import DefaultHead from "components/DefaultHead";
import Iframe from "components/Iframe";
import PaperCustom from "components/PaperCustom/index";
import AccordionCustom from "components/AccordionCustom/index";
import ListBlock from "components/ListBlock/index";

const DateLineChart = () => {
  return (
    <Box sx={{}}>
      <PageHead
        label="Simple Date Line Graph"
        content="Line graph (also known as Line chart) displays series of data points connected by straight line segments."
      />
      {/* <ListBlock
        buttons={[
          { label: "Single Line Chart" },
          { label: "Multi Line Chart" },
          { label: "documentation" },
        ]}
      /> */}
      <PaperCustom>
        <DefaultHead
          label="Single Line Chart"
          content="The following code snippet demonstrates a simple app that uses the chartamio component:"
          mb="5px"
        />
        <Iframe src="https://stackblitz.com/edit/react-nm1pgy?embed=1&file=src/Line.js&hideExplorer=1&theme=dark" />
      </PaperCustom>
      <PaperCustom>
        <DefaultHead
          label="Multi Line Chart"
          content="The following code snippet demonstrates a simple app that uses the chartamio component:"
          mb="5px"
        />

        <Iframe src="https://stackblitz.com/edit/multi-date-line-chartam?embed=1&file=src/Line.js&hideExplorer=1&theme=dark" />
      </PaperCustom>
      <PaperCustom>
        <DefaultHead
          label="Documentation"
          content="The following code snippet demonstrates a simple app that uses the chartamio component:"
          mb="10px"
        />
        <AccordionCustom
          heading="What is ChartId?"
          summary="Information about chart id"
          description="ChartId is basically unique id for chart component"
        />
      </PaperCustom>
    </Box>
  );
};

export default DateLineChart;
