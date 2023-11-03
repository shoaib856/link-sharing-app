import { createSlice } from "@reduxjs/toolkit";
import { LinkState } from "../storeTypes";
import platforms from "../../utils/platforms";

const initialState: LinkState[] = [];
let id = 0;

const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addLink: (state) => {
      state.push({
        link: "",
        name: platforms[0].name,
        icon: platforms[0].icon,
        platformId: platforms[0].platformId,
        id: ++id,
      });
    },
    removeLink: (state, action) => {
      if (state.length === 1) id = 0;
      return state.filter((link) => link.id !== action.payload);
    },
    modifyLink: (state, action) => {
      return state.map((link) => {
        if (link.id === action.payload.id) {
          return {
            ...link,
            ...action.payload,
          };
        }
        return link;
      });
    },
  },
});

export const { addLink, removeLink, modifyLink } = linksSlice.actions;
export default linksSlice.reducer;
