import React from "react";
import DateLineChart from "_tests/DateLineChart";
import CategoryLineChart from "_tests/CategoryLineChart";
import { _CategoryLineData } from "_mock/_CategoryLineData";

const MainModule = () => {
  return (
    // <DateLineChart />
    <CategoryLineChart chartId="catgeory-line-chart" data={_CategoryLineData} />
  );
};

export default MainModule;
