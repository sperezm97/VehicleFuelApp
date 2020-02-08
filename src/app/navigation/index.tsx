import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTapNavigator from "./tabs";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainTapNavigator />
    </NavigationContainer>
  );
}
