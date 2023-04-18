import ColumnWithRotatedLabelBar from "pages/Charts/Bar/ColumnWithRotatedLabelBar/index";
import DateLineChart from "pages/Charts/Line/DateLineChart/index";
import Contributers from "pages/GettingStarted/Contributers/index";
import Installation from "pages/GettingStarted/Installation/index";
import Overview from "pages/GettingStarted/Overview/index";
import Sponsors from "pages/GettingStarted/Sponsors/index";
import Usage from "pages/GettingStarted/Usage/index";
import { Outlet } from "react-router-dom";
import {
  SlidersOutlined,
  DotChartOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  CoffeeOutlined,
  DeploymentUnitOutlined,
  FieldBinaryOutlined,
  NodeIndexOutlined,
  StockOutlined,
} from "@ant-design/icons";
import CategoryLineChart from "pages/Charts/Line/CategoryLineChart/index";

const styleInD = { fontSize: "18px", color: "white", paddingRight: "8px" };
const styleInM = { fontSize: "18px", color: "black", paddingRight: "8px" };

export const navbarMenu = [
  {
    id: 1,
    label: "Getting Started",
    key: "getting-started",
    path: "/getting-started",
    element: <Outlet />,
    iconD: <SlidersOutlined style={styleInD} />,
    iconM: <SlidersOutlined style={styleInM} />,
    type: "parent",
    childrens: [
      {
        id: 1,
        label: "Overview",
        key: "getting-started-overview",
        path: "overview",
        element: <Overview />,
        iconD: <CheckCircleOutlined style={styleInD} />,
        iconM: <CheckCircleOutlined style={styleInM} />,
        type: "child",
      },
      {
        id: 2,
        label: "Installation",
        key: "getting-started-installation",
        path: "installation",
        iconD: <CodeOutlined style={styleInD} />,
        iconM: <CodeOutlined style={styleInM} />,
        element: <Installation />,
        type: "child",
      },
      {
        id: 3,
        label: "Usage",
        key: "getting-started-usage",
        path: "usage",
        iconD: <CoffeeOutlined style={styleInD} />,
        iconM: <CoffeeOutlined style={styleInM} />,
        element: <Usage />,
        type: "child",
      },
      {
        id: 4,
        label: "Contributers",
        key: "getting-started-contributers",
        path: "contributers",
        iconD: <DeploymentUnitOutlined style={styleInD} />,
        iconM: <DeploymentUnitOutlined style={styleInM} />,
        element: <Contributers />,
        type: "child",
      },
      {
        id: 4,
        label: "Sponsors",
        key: "getting-started-sponsors",
        path: "sponsors",
        iconD: <FieldBinaryOutlined style={styleInD} />,
        iconM: <FieldBinaryOutlined style={styleInM} />,
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
    iconD: <DotChartOutlined style={styleInD} />,
    iconM: <DotChartOutlined style={styleInM} />,
    type: "parent",
    childrens: [
      {
        id: 1,
        label: "Column With Rotated Label",
        key: "charts-column-with-rotated-label",
        path: "column-with-rotated-label",
        iconD: <NodeIndexOutlined style={styleInD} />,
        iconM: <NodeIndexOutlined style={styleInM} />,
        element: <ColumnWithRotatedLabelBar />,
        type: "child",
      },
      {
        id: 2,
        label: "Date Line Chart",
        key: "charts-date-line-chart",
        path: "date-line-chart",
        iconD: <StockOutlined style={styleInD} />,
        iconM: <StockOutlined style={styleInM} />,
        element: <DateLineChart />,
        type: "child",
      },
      {
        id: 3,
        label: "Category Line Chart",
        key: "charts-category-line-chart",
        path: "category-line-chart",
        iconD: <StockOutlined style={styleInD} />,
        iconM: <StockOutlined style={styleInM} />,
        element: <CategoryLineChart />,
        type: "child",
      },
    ],
  },
];
