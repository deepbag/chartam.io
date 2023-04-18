import { navbarMenu } from "@mock/navbar";
import SidebarOuts from "layout/SidebarOuts";
import _ from "lodash";
import React, { useEffect, useMemo } from "react";
import {
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { setOpenChildKey, setOpenKey } from "redux/reducers/menus.slice";
import { useDispatch } from "react-redux";

const AppRouter = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname) {
      const splitItem = _.remove(_.split(pathname, "/"), (item) => item !== "");
      const route = _.kebabCase(splitItem.join(" "));
      const result = _.find(
        _.flatMapDeep(navbarMenu, (item) => item.childrens || item),
        { key: route }
      );
      if (result) {
        if (result.type === "child") {
          dispatch(setOpenKey(splitItem[0]));
          dispatch(setOpenChildKey(result.key));
        } else if (result.type === "parent") dispatch(setOpenKey(result.key));
      }
    }
  }, []);

  return (
    <SidebarOuts>
      <Routes>
        <Route path="/" element={<Outlet />} />;
        {_.map(navbarMenu, (item, index) => {
          if (_.isEmpty(item.childrens)) {
            return (
              <Route path={item.path} element={item.element} key={index} />
            );
          } else if (!_.isEmpty(item.childrens)) {
            return (
              <Route path={item.path} element={item.element} key={index}>
                {_.map(item.childrens, (itemIn, indexIn) => {
                  return (
                    <Route
                      path={itemIn.path}
                      element={itemIn.element}
                      key={indexIn}
                    />
                  );
                })}
              </Route>
            );
          }
        })}
      </Routes>
    </SidebarOuts>
  );
};

export default AppRouter;
