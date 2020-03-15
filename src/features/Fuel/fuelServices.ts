import { db } from "../../app/config/firebase";

export default {
  getFuelsByVehicle: () => db.collection("vehicles/1/fuels").get(),

  createFuelsByVehicle: data => db.collection("vehicles/1/fuels").add(data)
};
