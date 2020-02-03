import React from "react";
import { View, Text } from "react-native";
import withHOC from "../app/hooks/hoc";

const MyGarbage: React.FunctionComponent = () => {
  return (
    <View>
      <Text>MyGarbage</Text>
    </View>
  );
};
export default withHOC(MyGarbage);
