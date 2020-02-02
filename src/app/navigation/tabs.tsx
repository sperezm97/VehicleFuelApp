import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as screens from "../screens";

const MainTap = createBottomTabNavigator();

function MainTapNavigator() {
  return (
    <MainTap.Navigator>
      <MainTap.Screen name="Fuel" component={screens.Fuel} />
      <MainTap.Screen name="Services" component={screens.Services} />
      <MainTap.Screen name="Reports" component={screens.Reports} />
      <MainTap.Screen name="MyGarbage" component={screens.MyGarbage} />
    </MainTap.Navigator>
  );
}
export default MainTapNavigator;
