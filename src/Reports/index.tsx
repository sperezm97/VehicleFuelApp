import React, { useState } from "react";
import withHOC from "../app/hooks/hoc";
import { Chart } from "./components";
import {
  Container,
  CardList,
  HeaderList,
  CategoryItem,
  View,
  Text
} from "../app/components";
import { categoryList } from "../app/hooks/mock";
import { Content } from "native-base";
import colors from "../app/styles/colors";
const Reports: React.FunctionComponent = () => {
  const [value, setValue] = useState("");
  const header = () => (
    <HeaderList
      value={value}
      handleValueChange={setValue}
      placeholder="All Vehicles"
      options={[{ label: "nissa sentra", value: 1 }]}
    />
  );

  const renderItem = () => {
    return <CategoryItem />;
  };

  return (
    <Container>
      <View column center>
        <View center>
          <Text caption color={colors.grey.base}>
            Your Total Expenditure
          </Text>
          <Text
            displayXLarge
            color={colors.black}
            weight={"bold"}
            style={{ marginTop: 10, marginBottom: 5 }}
          >
            $39,921.31
          </Text>
        </View>
        {/* <Chart /> */}
      </View>
      <Content scrollEnabled={false} nestedScrollEnabled>
        <CardList data={categoryList} renderItem={renderItem} header={header} />
      </Content>
    </Container>
  );
};
export default withHOC(Reports);
