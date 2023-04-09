import ColumnWithRotatedLabelBar from "pages/Charts/Bar/ColumnWithRotatedLabelBar/index";
import DateLineChart from "pages/Charts/Line/DateLineChart/index";
import Contributers from "pages/GettingStarted/Contributers/index";
import Installation from "pages/GettingStarted/Installation/index";
import Overview from "pages/GettingStarted/Overview/index";
import Sponsors from "pages/GettingStarted/Sponsors/index";
import Usage from "pages/GettingStarted/Usage/index";
import { Outlet } from "react-router-dom";

export const navbarMenu = [
  {
    id: 1,
    label: "Getting Started",
    key: "getting-started",
    path: "/getting-started",
    element: <Outlet />,
    type: "parent",
    childrens: [
      {
        id: 1,
        label: "Overview",
        key: "getting-started-overview",
        path: "overview",
        element: <Overview />,
        type: "child",
      },
      {
        id: 2,
        label: "Installation",
        key: "getting-started-installation",
        path: "installation",
        element: <Installation />,
        type: "child",
      },
      {
        id: 3,
        label: "Usage",
        key: "getting-started-usage",
        path: "usage",
        element: <Usage />,
        type: "child",
      },
      {
        id: 4,
        label: "Contributers",
        key: "getting-started-contributers",
        path: "contributers",
        element: <Contributers />,
        type: "child",
      },
      {
        id: 4,
        label: "Sponsors",
        key: "getting-started-sponsors",
        path: "sponsors",
        element: <Sponsors />,
        type: "child",
      },
    ],
  },
  {
    id: 2,
    label: "Charts",
    key: "charts",
    path: "/charts",
    element: <Outlet />,
    type: "parent",
    childrens: [
      {
        id: 1,
        label: "Column With Rotated Label Bar",
        key: "charts-column-with-rotated-label",
        path: "column-with-rotated-label",
        element: <ColumnWithRotatedLabelBar />,
        type: "child",
      },
      {
        id: 2,
        label: "Date Line Chart",
        key: "charts-date-line-chart",
        path: "date-line-chart",
        element: <DateLineChart />,
        type: "child",
      },
    ],
  },
];
