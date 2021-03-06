import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as screens from "../../features/screens";
import Header from "../../comon/components/Header";

const FuelStack = createStackNavigator();
const MyGarbageStack = createStackNavigator();
const ServicesStack = createStackNavigator();

const defaultScreenOptions = {};

export const FuelNavigator = () => (
  <FuelStack.Navigator
    initialRouteName="Fuel"
    screenOptions={defaultScreenOptions}
    mode="modal"
    headerMode="none"
  >
    <FuelStack.Screen name="Fuel" component={screens.Fuel} />
    <FuelStack.Screen name="AddFuel" component={screens.AddFuel} />
  </FuelStack.Navigator>
);

export const MyGarageNavigator = () => (
  <MyGarbageStack.Navigator
    initialRouteName="MyGarage"
    screenOptions={defaultScreenOptions}
    mode="modal"
    headerMode="none"
  >
    <FuelStack.Screen name="MyGarbage" component={screens.MyGarage} />
    <FuelStack.Screen name="AddVehicle" component={screens.AddVehicle} />
  </MyGarbageStack.Navigator>
);

export const ServicesNavigator = () => (
  <ServicesStack.Navigator
    initialRouteName="Services"
    screenOptions={defaultScreenOptions}
    mode="modal"
    headerMode="none"
  >
    <FuelStack.Screen name="Services" component={screens.Services} />
    <FuelStack.Screen name="AddService" component={screens.AddService} />
  </ServicesStack.Navigator>
);
