import { db } from "../config/firebase";

export default {
  getFuelsByVehicle: () => db.doc("vehicles/1/fuels").get(),

  createFuelsByVehicle: data => db.collection("vehicles/1/fuels").add(data)
};
