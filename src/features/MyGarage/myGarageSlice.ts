import { createSlice } from "@reduxjs/toolkit";

const myGarageSlice = createSlice({
  name: "garage",
  initialState: {},
  reducers: {
    setGarage: (state, action) => {
      return action.payload;
    },
    clearGarage: (state, action) => {
      return new Object();
    }
  }
});

export const { setGarage, clearGarage } = myGarageSlice.actions;

export default myGarageSlice.reducer;
