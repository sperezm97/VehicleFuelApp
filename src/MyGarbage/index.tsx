import React, { useState } from "react";
import withHOC from "../app/hooks/hoc";
import {
  Container,
  CardList,
  HeaderList,
  View,
  Text,
  FloatButton,
  VehicleItem
} from "../app/components";
import { vehicleList } from "../app/hooks/mock";
import { Content } from "native-base";
import colors from "../app/styles/colors";
import VehicleCard from "./components/VehicleCard";

const MyGarbage: React.FunctionComponent = () => {
  const [value, setValue] = useState("");

  const renderItem = () => {
    return <VehicleItem />;
  };

  return (
    <Container>
      <VehicleCard />
      <Content
        contentContainerStyle={{ flex: 1 }}
        scrollEnabled={false}
        nestedScrollEnabled
      >
        <CardList data={vehicleList} renderItem={renderItem} />
      </Content>
      <View>
        <FloatButton onPress={() => {}} />
      </View>
    </Container>
  );
};
export default withHOC(MyGarbage);
