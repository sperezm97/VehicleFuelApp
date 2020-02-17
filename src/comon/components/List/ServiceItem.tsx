import React from "react";
import { ListItem } from "native-base";
import Text from "../Text";
import View from "../View";
import colors from "../../styles/colors";

interface ServiceItem {}
const ServiceItem = () => {
  return (
    <ListItem noIndent noBorder style={{ justifyContent: "space-between" }}>
      <View row>
        <View center serviceThumb color={colors.purple}>
          <Text heading color={colors.white}>
            M
          </Text>
        </View>
        <View style={{ paddingLeft: 15, alignItems: "flex-start" }}>
          <Text displaySmall color={colors.black} weight={600}>
            Oil Change
          </Text>
          <Text subHeading color={colors.grey.base} weight={400}>
            Maintenance
          </Text>
        </View>
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

export default ServiceItem;
