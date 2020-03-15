import { all, fork } from "redux-saga/effects";
import watchFuels from "./Fuel/fuelSagas";

export default function* rootSagas() {
  yield all([fork(watchFuels)]);
}
