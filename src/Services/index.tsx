import React from "react";
import { View, Text } from "react-native";
import { WithSafeArea } from "../app/hooks/hoc";

const Services: React.FunctionComponent = () => {
  return (
    <View>
      <Text>Services</Text>
    </View>
  );
};
export default WithSafeArea(Services);
