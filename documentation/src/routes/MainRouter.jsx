import { navbarMenu } from "@mock/navbar";
import MainLayout from "layout/MainLayout";
import _ from "lodash";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

const MainRouter = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Outlet />} />;
      </Routes>
    </MainLayout>
  );
};

export default MainRouter;
