import React from "react";
// import ColumnWithRolatedLabel from "./Bar/ColumnWithRolatedLabel";
import { ColumnWithRolatedLabelData } from "./@mock/Bar/ColumnWithRolatedLabel";
import { ColumnWithRolatedLabel } from "chartam.io";

const Module = () => {
  return (
    <>
      <ColumnWithRolatedLabel
        chartId="ColumnWithRolatedLabel" // chartid will be unique
        width="1000px" // width
        height="500px" // height
        data={ColumnWithRolatedLabelData} // data
        setting={{
          xAxis: {
            label: {
              rotation: -90, // rotation
              paddingRight: 15, // padding right
            },
          },
          yAxis: {
            minValue: 100, // value for yaxis start point
            maxValue: 2500, // value for yaxis end point
          },
          columnSeries: {
            tooltipText: "{value} {category}", // JSON key names
            barcolor: "#6ed27a", // color code
          },
        }}
      />
    </>
  );
};

export default Module;
