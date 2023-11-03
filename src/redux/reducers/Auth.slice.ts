import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../storeTypes";

const initialState: Auth = {
  loggedIn: localStorage.getItem("loggedIn") === "true",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state) => {
      state.loggedIn = true;
      localStorage.setItem("loggedIn", "true");
    },
    logoutAction: (state) => {
      state.loggedIn = false;
      localStorage.clear();
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
