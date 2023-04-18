import MainLayout from "layout/MainLayout";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "routes/AppRouter";

const AppMain = () => {
  const { pathname } = useLocation();
  const path = pathname === "/" ? true : false;

  useEffect(() => {
    if (path) {
      // Add overflow: hidden to the body element when the component mounts
      document.body.style.overflow = "auto";
    } else {
      // Add overflow: hidden to the body element when the component mounts
      document.body.style.overflow = "hidden";
    }
    // Remove the style when the component unmounts to prevent memory leaks
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return path ? <MainLayout /> : <AppRouter />;
};

export default AppMain;
