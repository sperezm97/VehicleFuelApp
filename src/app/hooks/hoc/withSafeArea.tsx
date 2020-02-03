import React from "react";
import { SafeAreaView } from "react-native";

export default Component => {
  const newSafeAreas: React.FunctionComponent = props => (
    <SafeAreaView style={{ flex: 1 }}>
      <Component {...props} />
    </SafeAreaView>
  );
  return newSafeAreas;
};
