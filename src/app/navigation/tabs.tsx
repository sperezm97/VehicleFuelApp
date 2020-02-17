import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
  BottomTabBarOptions
} from "@react-navigation/bottom-tabs";
import * as screens from "../../features/screens";
import theme from "../../comon/styles";
import * as stacks from "../navigation/stacks";
import { TabBar } from "../../comon/components";

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

const MainTapNavigator = (): React.ReactElement => {
  return (
    <MainTap.Navigator
      initialRouteName="FUEL"
      tabBarOptions={defaultTabBarOptions}
      screenOptions={defaultScreenOptions}
      tabBar={props => <TabBar {...props} />}
      backBehavior="history"
      lazy
    >
      <MainTap.Screen name="FUEL" component={stacks.FuelNavigator} />
      <MainTap.Screen name="SERVICES" component={stacks.ServicesNavigator} />
      <MainTap.Screen name="REPORTS" component={screens.Reports} />
      <MainTap.Screen name="MYGARBAGE" component={stacks.MyGarbageNavigator} />
    </MainTap.Navigator>
  );
};
export default MainTapNavigator;
