import { configureStore } from "@reduxjs/toolkit";
import root from "../features/rootReduces";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSagas from "../features/rootSagas";
import Reactotron from "./config/ReactotronConfig";
import compact from "lodash/compact";

const sagaMonitor = Reactotron.createSagaMonitor();
const SagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = configureStore({
  reducer: root,
  devTools: __DEV__,
  middleware: [SagaMiddleware, __DEV__ ? createLogger() : null],
  enhancers: [Reactotron.createEnhancer()]
});

SagaMiddleware.run(rootSagas);

export default store;
