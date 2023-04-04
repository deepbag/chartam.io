import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import "assets/main.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "theme/index";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("chartamio"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRouter />
          <Toaster position="top-right" reverseOrder={false} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
