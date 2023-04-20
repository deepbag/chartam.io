import React from "react";
import DateLineChart from "_tests/DateLineChart";
import CategoryLineChart from "_tests/CategoryLineChart";
import { _CategoryLineData } from "_mock/_CategoryLineData";
import { oneYearIn } from "_mock/_DateLineData";

const MainModule = () => {
  return (
    <DateLineChart
      chartId="date-line-chart"
      data={oneYearIn}
      setting={{
        xAxis: {
          timeUnit: "day",
          dateFormat: "MMM-DD",
          // minGridDistance: 50,
          labels: {
            color: "#000",
            visible: false,
          },
        },
        yAxis: {
          minValue: 0,
          // maxValue: 100,
          labels: {
            color: "#000",
            visible: false,
          },
        },
        series: {
          tooltip: {
            visible: true,
            text: "{category}: {valueY}",
            color: "#fff",
            location: "down", // horizontal, left, right, vertical, down, up
            strokeColor: "#fff",
            strokeOpacity: 2,
            strokeWidth: 1,
          },
          fills: {
            color: "#339966",
            opacity: 0.2,
          },
          stroke: {
            color: "#339966",
            width: 3,
            dashed: false,
            dashedDistance: [10, 5],
          },
        },
        // label: {
        //   top: {
        //     visible: false,
        //     text: "Default Line Chart Label (Important Note)",
        //     fontSize: 18,
        //     fontWeight: "500",
        //     textAlign: "center",
        //     x: 50,
        //     centerX: 50,
        //     paddingTop: 0,
        //     paddingBottom: 20,
        //     fill: "#000",
        //   },
        // },
        // chart: {
        //   visible: false,
        //   wheelY: "zoomX",
        // },
        scrollbarX: false,
      }}
    />
    // <CategoryLineChart chartId="catgeory-line-chart" data={_CategoryLineData} />
  );
};

export default MainModule;
