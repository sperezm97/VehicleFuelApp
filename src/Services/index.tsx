import React, { useState } from "react";
import withHOC from "../app/hooks/hoc";
import {
  Container,
  View,
  LeftCard,
  RightCard,
  CardList,
  FloatButton,
  HeaderList,
  ServiceItem
} from "../app/components";
import { Content } from "native-base";
import { serviceList } from "../app/hooks/mock";
const Services: React.FunctionComponent = () => {
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
    return <ServiceItem />;
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
        <CardList data={serviceList} renderItem={renderItem} header={header} />
      </Content>
      <View>
        <FloatButton onPress={() => {}} />
      </View>
    </Container>
  );
};
export default withHOC(Services);
