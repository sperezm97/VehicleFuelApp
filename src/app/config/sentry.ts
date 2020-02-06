import * as Sentry from "sentry-expo";
import env from "./env";

Sentry.init({
  dsn: env.sentryKey,
  enableInExpoDevelopment: false,
  debug: true
});
