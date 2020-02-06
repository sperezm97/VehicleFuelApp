import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/analytics";
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

const instance = firebase.firestore();

const analytics = firebase.analytics();

export { instance, analytics };
