import SidebarOuts from "layout/SidebarOuts";
import Charts from "pages/Charts";
import Installation from "pages/GettingStarted/Installation/index";
import Overview from "pages/GettingStarted/Overview/index";
import Usage from "pages/GettingStarted/Usage/index";
import PostYourRequirement from "pages/PostYourRequirement/index";
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
    if (pathname) navigate(pathname);
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
        <Route
          path="/post-your-requirement"
          element={<PostYourRequirement />}
        />
      </Routes>
    </SidebarOuts>
  );
};

export default App;
