import { db } from "../config/firebase";

export default {
  getVehicle: () => db.doc("vehicles/1").get(),

  createVehicles: data => db.collection("vehicles").add(data)
};
