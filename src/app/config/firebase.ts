import * as firebase from "firebase/app";
import "firebase/firestore";
import env from "./env";

// Initialize Firebase
const firebaseConfig = {
  apiKey: env.firebaseApiKey,
  authDomain: env.firebaseAuthDOMAIN,
  databaseURL: env.firebaseDataBaseUrl,
  projectId: env.firebaseProjectId,
  storageBucket: env.firebaseStorageBucket,
  messagingSenderId: env.firebaseMessagingSenderId,
  appId: env.firebaseAppId,
  measurementId: env.firebaseMeasurementId
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
