import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const FuelStack = createStackNavigator();
const MyGarbageStack = createStackNavigator();
const ReportsStack = createStackNavigator();
const ServicesStack = createStackNavigator();

export const FuelNavigator = () => (
  <FuelStack.Navigator>
    <FuelStack.Screen />
  </FuelStack.Navigator>
);

export const MyGarbageNavigator = () => (
  <MyGarbageStack.Navigator>
    <MyGarbageStack.Screen />
  </MyGarbageStack.Navigator>
);

export const ReportsNavigator = () => (
  <ReportsStack.Navigator>
    <ReportsStack.Screen />
  </ReportsStack.Navigator>
);

export const ServicesNavigator = () => (
  <ServicesStack.Navigator>
    <ServicesStack.Screen />
  </ServicesStack.Navigator>
);
