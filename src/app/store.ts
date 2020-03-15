import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "../features/rootReduces";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSagas from "../features/rootSagas";
import Reactotron from "./config/ReactotronConfig";

const sagaMonitor = Reactotron.createSagaMonitor();
const SagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = configureStore({
  reducer,
  devTools: __DEV__,
  middleware: [...getDefaultMiddleware({ thunk: false }), SagaMiddleware],
  enhancers: [Reactotron.createEnhancer()]
});

SagaMiddleware.run(rootSagas);

export default store;
