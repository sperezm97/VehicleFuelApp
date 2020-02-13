import React from "react";
import { View, Text } from "../../app/components";
import colors from "../../app/styles/colors";

const VehicleCard = () => {
  return (
    <View card="body">
      <Text displaySmall color={colors.grey.base}>
        Vehicle selected:{" "}
        <Text displayMedium color={colors.red} weight={600}>
          {" "}
          Chevrolet Cruze
        </Text>
      </Text>
    </View>
  );
};

export default VehicleCard;
