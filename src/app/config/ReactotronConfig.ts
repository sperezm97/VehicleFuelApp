import Reactotron from "reactotron-react-native";
import { AsyncStorage } from "react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

const reactotron = Reactotron;

reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: "Vehicle Fuel App"
  })
  .use(reactotronRedux())
  .use(sagaPlugin({}))
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/
    },
    editor: false,
    errors: { veto: stackFrame => false },
    overlay: false
  })
  .connect();
export default reactotron;
