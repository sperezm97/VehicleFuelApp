import React from "react";
import { View, Text } from "react-native";
import withHOC from "../app/hooks/hoc";

const Reports: React.FunctionComponent = () => {
  return (
    <View>
      <Text>Reports</Text>
    </View>
  );
};
export default withHOC(Reports);
