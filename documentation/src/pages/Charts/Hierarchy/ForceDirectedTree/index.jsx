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

const ForceDirectedTreeChart = () => {
  const [isActiveTab, setIsActiveTab] = useState("force-directed-tree-chart");

  const _tabs = {
    "force-directed-tree-chart": <ChildTreeChartFrame />,
    // documentation: <Documentation />,
  };

  const handlechange = (evv) => {
    // change tab
    changeHashValue(evv);
    const hash = getHashValue();
    setIsActiveTab(_.replace(hash, /#/g, ""));
  };

  useMemo(() => {
    // add force-directed-tree-chart in url
    changeHashValue("force-directed-tree-chart");
  }, []);

  return (
    <Box sx={{}}>
      <PageHead
        label="Force Directed Tree Chart"
        content="Force Directed Tree is a special kind of chart used to display of multi-item data related in hierarchical, linear or mixed way, as a series of linked bubbles."
      />
      <ListBlock
        buttons={[
          {
            label: "Force Directed Tree Chart",
            key: "force-directed-tree-chart",
          },
          //   { label: "documentation", key: "documentation" },
        ]}
        handlechange={handlechange}
        isActiveTab={isActiveTab}
      />
      {_tabs[isActiveTab]}
    </Box>
  );
};

export default ForceDirectedTreeChart;

const ChildTreeChartFrame = () => {
  return (
    <PaperCustom>
      <DefaultHead
        label="Force Directed Tree Chart"
        content="The following code snippet demonstrates a simple app that uses the chartamio component:"
        mb="5px"
      />
      <Iframe src="https://stackblitz.com/edit/stackblitz-starters-z54wps?embed=1&file=src%2FForceDirectedTree.jsx&hideExplorer=1&theme=dark" />
    </PaperCustom>
  );
};

// const MultiLineChart = () => {
//   return (
//     <PaperCustom>
//       <DefaultHead
//         label="Multi Line Chart"
//         content="The following code snippet demonstrates a simple app that uses the chartamio component:"
//         mb="5px"
//       />

//       <Iframe src="https://stackblitz.com/edit/multi-date-line-chartam?embed=1&file=src/Line.js&hideExplorer=1&theme=dark" />
//     </PaperCustom>
//   );
// };

// const Documentation = () => {
//   return (
//     <PaperCustom>
//       <DefaultHead
//         label="Documentation"
//         content="The following code snippet demonstrates a simple app that uses the chartamio component:"
//         mb="10px"
//       />
//       {_.map(_accordionDateLine, (item, index) => {
//         return (
//           <AccordionCustom
//             heading={item.heading}
//             summary={item.summary}
//             description={item.description}
//             children={
//               <TableCustom head={item.table.head} body={item.table.body} />
//             }
//             information={item?.information}
//           />
//         );
//       })}
//     </PaperCustom>
//   );
// };
