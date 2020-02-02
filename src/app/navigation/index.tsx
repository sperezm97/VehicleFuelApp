import React from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import MainTapNavigator from "./tabs";

export default function AppNavigator() {
  return (
    <NavigationNativeContainer>
      <MainTapNavigator />
    </NavigationNativeContainer>
  );
}
