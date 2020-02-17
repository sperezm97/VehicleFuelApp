import React from "react";
import View from "../View";
import Text from "../Text";
import Image from "../Image";
import colors from "../../styles/colors";

const VehicleItem: React.FunctionComponent = () => {
  return (
    <View style={{ marginVertical: 5 }}>
      <View row>
        <Text heading color={colors.grey.base}>
          Chevrolet Cruze LTZ 2015
        </Text>
      </View>
      <View column>
        <Image
          resizeMode="cover"
          source={{ uri: "http://via.placeholder.com/300x150.png" }}
        />
      </View>
    </View>
  );
};

export default VehicleItem;
