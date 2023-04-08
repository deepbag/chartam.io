import { AppstoreOutlined } from "@ant-design/icons";

export const navbarMenu = [
  {
    id: 1,
    label: "Getting Started",
    key: "getting-started",
    path: "/getting-started",
    icon: <AppstoreOutlined />,
    childrens: [
      {
        id: 1,
        label: "Overview",
        key: "getting-started-overview",
        path: "/overview",
      },
      {
        id: 2,
        label: "Installation",
        key: "getting-started-installation",
        path: "/installation",
      },
      {
        id: 3,
        label: "Usage",
        key: "getting-started-usage",
        path: "/usage",
      },
    ],
  },
  {
    id: 2,
    label: "Charts",
    key: "charts",
    path: "/charts",
    childrens: [
      {
        id: 1,
        label: "Column With Rotated Label Bar",
        key: "column-with-rotated-label",
        path: "/column-with-rotated-label",
      },
      {
        id: 2,
        label: "Date Line Chart",
        key: "date-line-chart",
        path: "/date-line-chart",
      },
    ],
  },
];
