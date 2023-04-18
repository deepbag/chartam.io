import React, { useMemo, useRef, useState } from "react";
import { Box } from "@mui/material";
import PageHead from "components/PageHead";
import DefaultHead from "components/DefaultHead";
import Iframe from "components/Iframe";
import PaperCustom from "components/PaperCustom/index";
import AccordionCustom from "components/AccordionCustom/index";
import ListBlock from "components/ListBlock/index";
import { changeHashValue, getHashValue } from "utils/URLHash";
import _ from "lodash";
import TableCustom from "components/TableCustom/index";
import { _accordionDateLine } from "@mock/_datelineInfo";

const CategoryLineChart = () => {
  const [isActiveTab, setIsActiveTab] = useState("single-line-chart");

  const _tabs = {
    "single-line-chart": <SingleLineChart />,
    "multi-line-chart": <MultiLineChart />,
    documentation: <Documentation />,
  };

  const handlechange = (evv) => {
    // change tab
    changeHashValue(evv);
    const hash = getHashValue();
    setIsActiveTab(_.replace(hash, /#/g, ""));
  };

  useMemo(() => {
    // add single-line-chart in url
    changeHashValue("single-line-chart");
  }, []);

  return (
    <Box sx={{}}>
      <PageHead
        label="Category Line Graph"
        content="Line graph (also known as Line chart) displays series of data points connected by straight line segments."
      />
      <ListBlock
        buttons={[
          { label: "Single Line Chart", key: "single-line-chart" },
          //   { label: "Multi Line Chart", key: "multi-line-chart" },
          //   { label: "documentation", key: "documentation" },
        ]}
        handlechange={handlechange}
        isActiveTab={isActiveTab}
      />
      {_tabs[isActiveTab]}
    </Box>
  );
};

export default CategoryLineChart;

const SingleLineChart = () => {
  return (
    <PaperCustom>
      <DefaultHead
        label="Single Line Chart"
        content="The following code snippet demonstrates a simple app that uses the chartamio component:"
        mb="5px"
      />
      <Iframe src="https://stackblitz.com/edit/react-u7mpsd?embed=1&file=src/Line.js&hideExplorer=1&theme=dark" />
    </PaperCustom>
  );
};

const MultiLineChart = () => {
  return (
    <PaperCustom>
      <DefaultHead
        label="Multi Line Chart"
        content="The following code snippet demonstrates a simple app that uses the chartamio component:"
        mb="5px"
      />

      <Iframe src="https://stackblitz.com/edit/multi-date-line-chartam?embed=1&file=src/Line.js&hideExplorer=1&theme=dark" />
    </PaperCustom>
  );
};

const Documentation = () => {
  return (
    <PaperCustom>
      <DefaultHead
        label="Documentation"
        content="The following code snippet demonstrates a simple app that uses the chartamio component:"
        mb="10px"
      />
      {_.map(_accordionDateLine, (item, index) => {
        return (
          <AccordionCustom
            heading={item.heading}
            summary={item.summary}
            description={item.description}
            children={
              <TableCustom head={item.table.head} body={item.table.body} />
            }
            information={item?.information}
          />
        );
      })}
    </PaperCustom>
  );
};
