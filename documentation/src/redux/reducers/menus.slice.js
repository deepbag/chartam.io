import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenu: "",
  openKey: "getting-started",
  openChildKey: "getting-started-overview",
};

export const menuSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {
    setActiveMenuDux: (state, action) => {
      state.activeMenu = action.payload;
    },
    setOpenKey: (state, action) => {
      state.openKey = action.payload;
    },
    setOpenChildKey: (state, action) => {
      state.openChildKey = action.payload;
    },
  },
});

export const { setActiveMenuDux, setOpenKey, setOpenChildKey } =
  menuSlice.actions;

export default menuSlice.reducer;
