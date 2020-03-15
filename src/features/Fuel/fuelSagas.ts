import { call, put, takeLatest } from "redux-saga/effects";
import api from "./fuelServices";
import { setFuels, clearFuel, updateFuel, setError } from "./fuelSlice";

export function* fetchFuels() {
  try {
    const data = yield call(api.getFuelsByVehicle);
    yield put({ type: setFuels.toString(), payload: data });
  } catch (error) {
    console.log(error);
    // yield put({ type: setError, payload: error });
  }
}

export default function* watchFuels() {
  yield takeLatest("fuels/fetch", fetchFuels);
}
