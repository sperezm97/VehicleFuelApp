import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTapNavigator from "./tabs";
import { WithSafeArea, WithTheme, WithProvider } from "../../comon/hooks/hoc";

export default function AppNavigator() {
  return (
    <WithSafeArea>
      <WithTheme>
        <WithProvider>
          <NavigationContainer>
            <MainTapNavigator />
          </NavigationContainer>
        </WithProvider>
      </WithTheme>
    </WithSafeArea>
  );
}
