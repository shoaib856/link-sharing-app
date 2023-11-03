import auth from "./reducers/Auth.slice";
import links from "./reducers/Links.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth,
    links,
  },
});

export default store;
