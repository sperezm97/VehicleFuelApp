import React from "react";
import { View, Text } from "react-native";
import { WithSafeArea } from "../app/hooks/hoc";

const Reports: React.FunctionComponent = () => {
  return (
    <View>
      <Text>Reports</Text>
    </View>
  );
};
export default WithSafeArea(Reports);
