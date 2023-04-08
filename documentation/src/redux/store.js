import { configureStore } from "@reduxjs/toolkit";
import menusSlice from "./reducers/menus.slice";

export const store = configureStore({
  reducer: {
    menus: menusSlice,
  },
});
