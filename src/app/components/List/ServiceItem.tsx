import React from "react";
import { View, Text } from "react-native";
import { ListItem, Body, Left, Right } from "native-base";

interface ServiceItem {}
const ServiceItem = () => {
  return (
    <ListItem>
      <Left>
        <View>
          <Text>M</Text>
        </View>
      </Left>
      <Body>
        <View>
          <Text>oil Change</Text>
          <Text>Maintenance</Text>
        </View>
      </Body>
      <Right>
        <View>
          <Text>$520.00</Text>
          <Text>Jun 15, 18</Text>
        </View>
      </Right>
    </ListItem>
  );
};

export default ServiceItem;
