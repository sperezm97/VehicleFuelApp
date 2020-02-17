import React from "react";
import { ListItem } from "native-base";
import Text from "../Text";
import View from "../View";
import colors from "../../styles/colors";

interface GallonItem {}
const GallonItem: React.FunctionComponent<GallonItem> = props => {
  return (
    <ListItem noIndent noBorder style={{ justifyContent: "space-between" }}>
      <View>
        <Text displaySmall color={colors.black} weight={500}>
          +9.95 gal
        </Text>
        <Text body color={colors.grey.base}>
          $4.42/gal
        </Text>
      </View>
      <View>
        <View line />
      </View>
      <View>
        <Text displaySmall color={colors.grey.base}>
          24.21mg
        </Text>
      </View>
      <View>
        <View line />
      </View>
      <View>
        <Text displaySmall color={colors.red} weight={500}>
          $42.909
        </Text>
        <Text body color={colors.grey.base}>
          Jun 21, 18
        </Text>
      </View>
    </ListItem>
  );
};

export default GallonItem;
