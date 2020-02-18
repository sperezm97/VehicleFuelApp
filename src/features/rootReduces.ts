import { combineReducers } from "@reduxjs/toolkit";
import fuelSlice from "./Fuel/fuelSlice";
import myGarageSlice from "./MyGarage/myGarageSlice";

export default combineReducers({
  fuels: fuelSlice,
  myGarage: myGarageSlice
});
