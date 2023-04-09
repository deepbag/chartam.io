import React from "react";
import { DateLine } from "chartam.io";
import { oneYearIn } from "_mock/_DateLineData";

const DateLineChart = () => {
  return (
    <DateLine
      chartId="simplelinegraph"
      width="1000px"
      height="500px"
      data={oneYearIn}
      setting={{
        xAxis: {
          // "millisecond", "second", "minute", "hour", "day", "week", "month", "year"
          timeUnit: "day",
          dateFormat: "MMM-DD",
        },
        yAxis: {
          minValue: 0,
          // maxValue: 500
        },
        series: {
          color: ["#339966", "#3c8469"],
          fills: {
            opacity: 0.2,
          },
          stroke: {
            width: 3,
            // dashed: true,
            // dashedDistance: [10, 5],
          },
        },
        scrollbarX: false,
      }}
    />
  );
};

export default DateLineChart;
