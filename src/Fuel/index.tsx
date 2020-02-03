import React from "react";
import { View, Text } from "react-native";
import withHOC from "../app/hooks/hoc";

const Fuel: React.FunctionComponent = () => {
  return (
    <View>
      <Text>Fuel</Text>
    </View>
  );
};

export default withHOC(Fuel);
