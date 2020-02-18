import { createSlice } from "@reduxjs/toolkit";

const fuelSlice = createSlice({
  name: "fuels",
  initialState: [],
  reducers: {
    setFuels: (state, action) => {
      state.concat(action.payload);
    },
    updateFuel: (state, action) => {
      state.map(fuel => {
        if (fuel.id == action.payload.id) {
          fuel = action.payload.data;
        }
        return fuel;
      });
    },
    clearFuel: (state, action) => {
      state.splice(0, state.length);
    }
  }
});

export const { setFuels, clearFuel, updateFuel } = fuelSlice.actions;

export default fuelSlice;
