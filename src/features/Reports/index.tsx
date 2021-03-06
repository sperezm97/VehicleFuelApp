import React, { useState } from "react";
import { Chart } from "./components";
import {
  Container,
  CardList,
  HeaderList,
  CategoryItem,
  View,
  Text
} from "../../comon/components";
import { categoryList } from "../../comon/hooks/mock";
import { Content } from "native-base";
import colors from "../../comon/styles/colors";
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
  // TODO: Find solution to use Array in styled components props
  return (
    <Container>
      <View flex column center>
        <View center>
          <Text caption color={colors.grey.base}>
            Your Total Expenditure
          </Text>
          <Text
            displayXLarge
            color={colors.black}
            weight={"bold"}
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            $39,921.31
          </Text>
        </View>
        <Chart />
      </View>
      <Content scrollEnabled={false} nestedScrollEnabled>
        <CardList data={categoryList} renderItem={renderItem} header={header} />
      </Content>
    </Container>
  );
};
export default Reports;
