import React from "react";
import View from "../View";
import Text from "../Text";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import spacing from "../../styles/spacing";
import colors from "../../styles/colors";

const CategoryItem = () => {
  return (
    <View column style={{ paddingTop: 5, paddingBottom: 10 }}>
      <View
        row
        style={{
          justifyContent: "space-between",
          marginBottom: 10
        }}
      >
        <Text heading color={colors.grey.dark}>
          Fuel Consumption
        </Text>
        <Text body color={colors.grey.base}>
          529k gal
        </Text>
      </View>
      <View>
        <ProgressBarAnimated
          width={spacing.deviceWidth * 0.92}
          maxValue={100}
          barEasing="sin"
          barAnimationDuration={1000}
          backgroundAnimationDuration={1000}
          backgroundColor={colors.purple}
          underlyingColor={colors.grey.lighter}
          backgroundColorOnComplete={colors.red}
          borderWidth={0.5}
          borderColor={colors.grey.light}
          borderRadius={20}
          value={20}
        />
      </View>
    </View>
  );
};

export default CategoryItem;
