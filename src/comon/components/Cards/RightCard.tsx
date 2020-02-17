import React from "react";
import Text from "../Text";
import View from "../View";
import colors from "../../styles/colors";

export default function RightCard() {
  return (
    <View card="left">
      <View align="left">
        <Text heading color={colors.grey.base}>
          Expenditure
        </Text>
        <Text heading weight={700}>
          $11,241
        </Text>
      </View>
    </View>
  );
}
