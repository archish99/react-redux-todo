import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    items: [],
    done: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("State:: ", state);
      state.items = [action.payload, ...state.items];
      return state;
    },
    deleteItem: (state, action) => {
      if (action.payload.type === "items")
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      else
        state.done = state.done.filter((item) => item.id !== action.payload.id);
      return state;
    },
    itemDone: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      //   deleteItem({ ...action.payload });
      state.done.push(action.payload);
      return state;
    },
  },
});

export const { addItem, deleteItem, itemDone } = listSlice.actions;

export default listSlice.reducer;
