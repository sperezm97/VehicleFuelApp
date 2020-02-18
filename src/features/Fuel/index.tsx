import React, { useState } from "react";
import { Content } from "native-base";
import {
  View,
  CardList,
  LeftCard,
  RightCard,
  Container,
  HeaderList,
  FloatButton,
  GallonItem
} from "../../comon/components";
import { fuelList } from "../../comon/hooks/mock";
import { useNavigation } from "@react-navigation/native";
import IHeaderList from "../app/types/HeaderList";

const Fuel: React.FunctionComponent = () => {
  const [value, setValue] = useState("All Vehicles");
  const navigation = useNavigation();

  const header = (): JSX.Element => (
    <HeaderList
      value={value}
      handleValueChange={setValue}
      placeholder="All Vehicles"
      options={[{ label: "nissa sentra", value: 1 }]}
    />
  );

  const renderItem = () => {
    return <GallonItem />;
  };

  return (
    <Container>
      <View row style={{ marginTop: 20 }}>
        <View flex>
          <LeftCard />
        </View>
        <View flex>
          <RightCard />
        </View>
      </View>
      <Content
        contentContainerStyle={{ flex: 1 }}
        scrollEnabled={false}
        nestedScrollEnabled
      >
        <CardList data={fuelList} renderItem={renderItem} header={header} />
      </Content>
      <View>
        <FloatButton
          onPress={() => navigation.navigate("FUEL", { screen: "AddFuel" })}
        />
      </View>
    </Container>
  );
};

export default Fuel;
