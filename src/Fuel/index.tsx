import React, { useState } from "react";
import withHOC from "../app/hooks/hoc";
import { Content } from "native-base";
import {
  View,
  CardList,
  LeftCard,
  RightCard,
  Container,
  HeaderList
} from "../app/components";
import { fuelList } from "../app/hooks/mock";
import GallonItem from "../app/components/List/GallonItem";
import FloatButton from "../app/components/FloatButton";

const Fuel: React.FunctionComponent = () => {
  const [value, setValue] = useState("All Vehicles");
  const header = () => (
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
        <FloatButton />
      </View>
    </Container>
  );
};

export default withHOC(Fuel);
