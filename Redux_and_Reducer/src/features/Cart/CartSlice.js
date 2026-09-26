import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
  name:"cart",
  initialState: {
    count: 10
  },

  reducers: {
    increment: (state) => {
        state.count++;
    },

    decrement: (state) => {
        state.count--;
    }
  }
})
export const{increment,decrement}=cartSlice.actions;
export default cartSlice.reducer;
