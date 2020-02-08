import React from "react";
import Text from "../Text";
import View from "../View";
import colors from "../../styles/colors";

export default function LeftCard() {
  return (
    <View card="right">
      <View align="right">
        <Text heading color={colors.grey.base}>
          Total Miles
        </Text>
        <Text heading weight={700}>
          11,241,52
        </Text>
      </View>
    </View>
  );
}
