import { createSlice } from "@reduxjs/toolkit";

const fuelSlice = createSlice({
  name: "fuels",
  initialState: [],
  reducers: {
    setFuels: (state, action) => {
      console.log(action);
      // const { data } = action.payload;
      // console.log(data);
      // data.forEach(doc => {
      //   const value = doc.data();
      //   console.log(doc);
      //   state.push(value);
      // });
      // console.log("state", state);
      // return state;
    },
    updateFuel: (state, action) => {},
    clearFuel: (state, action) => {},
    setError: (state, action) => {}
  }
});

export const getFuels = state => state.fuels;

export const { setFuels, clearFuel, updateFuel, setError } = fuelSlice.actions;

export default fuelSlice.reducer;
