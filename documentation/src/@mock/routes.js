import ColumnWithRotatedLabelBar from "pages/Charts/Bar/ColumnWithRotatedLabelBar/index";
import DateLineChart from "pages/Charts/Line/DateLineChart/index";
import Installation from "pages/GettingStarted/Installation/index";
import Overview from "pages/GettingStarted/Overview/index";
import Usage from "pages/GettingStarted/Usage/index";
import PostYourRequirement from "pages/PostYourRequirement/index";
import { Outlet } from "react-router-dom";

export const routeMenu = [
  {
    path: "/",
    element: <Outlet />,
    children: [],
  },
  {
    path: "/getting-started",
    element: <Outlet />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "installation",
        element: <Installation />,
      },
      {
        path: "usage",
        element: <Usage />,
      },
    ],
  },
  {
    path: "/charts",
    element: <Outlet />,
    children: [
      {
        path: "column-with-rotated-label",
        element: <ColumnWithRotatedLabelBar />,
      },
      {
        path: "date-line-chart",
        element: <DateLineChart />,
      },
      {
        path: "usage",
        element: <Usage />,
      },
    ],
  },
  {
    path: "/post-your-requirement",
    element: <PostYourRequirement />,
    children: [],
  },
];
