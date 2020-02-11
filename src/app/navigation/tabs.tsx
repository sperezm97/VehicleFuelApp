import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
  BottomTabBarOptions
} from "@react-navigation/bottom-tabs";
import * as screens from "../screens";
import theme from "../styles";
import { Icon } from "native-base";
import { TabBar } from "../components";

const MainTap = createBottomTabNavigator();

const defaultTabBarOptions: BottomTabBarOptions = {
  activeTintColor: theme.colors.red,
  activeBackgroundColor: theme.colors.white,
  inactiveTintColor: theme.colors.grey.base,
  inactiveBackgroundColor: theme.colors.white,
  showLabel: true,
  showIcon: true,
  labelPosition: "below-icon",
  adaptive: true,
  keyboardHidesTabBar: false
};

const defaultScreenOptions: BottomTabNavigationOptions = {};

// TODO: Refactor Icons Selected
const iconValues = [
  {
    type: "MaterialCommunityIcons",
    name: "fuel"
  },
  {
    type: "MaterialCommunityIcons",
    name: "format-list-bulleted"
  },
  {
    type: "MaterialCommunityIcons",
    name: "chart-areaspline"
  },
  {
    type: "MaterialCommunityIcons",
    name: "car-multiple"
  }
];

function MainTapNavigator() {
  return (
    <MainTap.Navigator
      initialRouteName="SERVICES"
      tabBarOptions={defaultTabBarOptions}
      screenOptions={defaultScreenOptions}
      tabBar={props => <TabBar {...props} icons={iconValues} />}
      backBehavior="history"
    >
      <MainTap.Screen name="FUEL" component={screens.Fuel} />
      <MainTap.Screen name="SERVICES" component={screens.Services} />
      <MainTap.Screen name="REPORTS" component={screens.Reports} />
      <MainTap.Screen name="MYGARBAGE" component={screens.MyGarbage} />
    </MainTap.Navigator>
  );
}
export default MainTapNavigator;
