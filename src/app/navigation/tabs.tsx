import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
  BottomTabBarOptions
} from "@react-navigation/bottom-tabs";
import * as screens from "../screens";
import theme from "../styles";
import { Icon } from "native-base";

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

function MainTapNavigator() {
  return (
    <MainTap.Navigator
      initialRouteName="FUEL"
      tabBarOptions={defaultTabBarOptions}
      screenOptions={defaultScreenOptions}
      backBehavior="history"
    >
      <MainTap.Screen
        name="FUEL"
        component={screens.Fuel}
        options={{
          tabBarIcon: props => (
            <Icon
              name="fuel"
              type="MaterialCommunityIcons"
              style={{ color: props.color, fontSize: props.size }}
              active={props.focused}
            />
          )
        }}
      />
      <MainTap.Screen
        name="SERVICES"
        component={screens.Services}
        options={{
          tabBarIcon: props => (
            <Icon
              name="format-list-bulleted"
              type="MaterialCommunityIcons"
              style={{ color: props.color, fontSize: props.size }}
              active={props.focused}
            />
          )
        }}
      />
      <MainTap.Screen
        name="REPORTS"
        component={screens.Reports}
        options={{
          tabBarIcon: props => (
            <Icon
              name="chart-areaspline"
              type="MaterialCommunityIcons"
              style={{ color: props.color, fontSize: props.size }}
              active={props.focused}
            />
          )
        }}
      />
      <MainTap.Screen
        name="MYGARBAGE"
        component={screens.MyGarbage}
        options={{
          tabBarIcon: props => (
            <Icon
              name="car-multiple"
              type="MaterialCommunityIcons"
              style={{ color: props.color, fontSize: props.size }}
              active={props.focused}
            />
          )
        }}
      />
    </MainTap.Navigator>
  );
}
export default MainTapNavigator;
