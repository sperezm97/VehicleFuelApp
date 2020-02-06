import dotEnv from "react-native-dotenv";

export default {
  sentryKey: dotEnv.SENTRY_TOKEN,
  sentryProject: dotEnv.SENTRY_PROJECT,
  sentryToken: dotEnv.SENTRY_TOKEN,

  firebaseApiKey: dotEnv.FIREBASE_API_KEY,
  firebaseAuthDOMAIN: dotEnv.FIREBASE_AUTH_DOMAIN,
  firebaseDataBaseUrl: dotEnv.FIREBASE_DATABASE_URL,
  firebaseStorageBucket: dotEnv.FIREBASE_STORAGE_BUCKET,
  firebaseProjectId: dotEnv.FIREBASE_PROJECT_ID,
  firebaseMessagingSenderId: dotEnv.FIREBASE_PROJECT_ID,
  firebaseAppId: dotEnv.FIREBASE_PROJECT_ID,
  firebaseMeasurementId: dotEnv.FIREBASE_PROJECT_ID
};
