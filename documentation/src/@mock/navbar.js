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
    childrens: [],
  },
  {
    id: 3,
    label: "Support",
    key: "support",
    path: "/support",
    childrens: [],
  },
];
