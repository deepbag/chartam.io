import SidebarOuts from "layout/SidebarOuts";
import Charts from "pages/Charts";
import Installation from "pages/GettingStarted/Installation/index";
import Overview from "pages/GettingStarted/Overview/index";
import Usage from "pages/GettingStarted/Usage/index";
import React, { useEffect, useMemo } from "react";
import {
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") navigate("/getting-started/overview");
  }, [pathname]);

  return (
    <SidebarOuts>
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/getting-started" element={<Outlet />}>
          <Route path="overview" element={<Overview />} />
          <Route path="installation" element={<Installation />} />
          <Route path="usage" element={<Usage />} />
        </Route>
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </SidebarOuts>
  );
};

export default App;
