import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getFuels } from "./fuelSlice";

const Fuel: React.FunctionComponent = () => {
  const [value, setValue] = useState("All Vehicles");
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const fuels = useSelector(state => console.log(state));

  const fetchFuelsByVehicle = () => {
    dispatch({ type: "fuels/fetch" });
    setLoading(false);
  };

  const clearFuelsByVehicle = () => {
    dispatch({ type: "fuels/clearFuel" });
  };

  useEffect(() => {
    fetchFuelsByVehicle();
    return () => {
      clearFuelsByVehicle();
    };
  }, []);

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
        <CardList data={[]} renderItem={renderItem} header={header} />
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
