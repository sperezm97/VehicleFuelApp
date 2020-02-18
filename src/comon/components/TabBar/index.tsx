import React from "react";
import { View, Text, TouchableOpacity, Route } from "react-native";
import { Icon } from "native-base";
import styles from "./styles";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const TabBar = ({
  state,
  navigation
}): React.FunctionComponentElement<BottomTabBarProps> => {
  const icons = [
    "fuel",
    "format-list-bulleted",
    "chart-areaspline",
    "car-multiple"
  ];

  const onPress = (route: Route, isSelected: Boolean): void => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key
    });

    if (!isSelected && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const isFocused = (selectedIndex: number, index: number): Boolean => {
    return selectedIndex == index;
  };

  const changeColorSelected = (isSelected: Boolean): Object => {
    return {
      color: isSelected ? "#E4222B" : "#9498A7"
    };
  };

  const renderItem = (route, index) => {
    const isSelected = isFocused(state.index, index);
    const color = changeColorSelected(isSelected);

    if (route.name == "FUEL" || route.name == "MYGARAGE") {
      return (
        <TouchableOpacity
          key={route.name}
          onPress={() => onPress(route, isSelected)}
          style={styles.onPressContainer}
        >
          <Icon
            name={icons[index]}
            type={"MaterialCommunityIcons"}
            style={[styles.icon, color]}
          />
          <Text style={[styles.label, color]}>{route.name}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        disabled
        key={route.name}
        onPress={() => onPress(route, isSelected)}
        style={styles.onPressContainer}
      >
        <Icon
          name={icons[index]}
          type={"MaterialCommunityIcons"}
          style={[styles.icon, { color: "#9498A7" }]}
        />
        <Text style={[styles.label, { color: "#9498A7" }]}>{route.name}</Text>
        <Text style={[styles.disable, { color: "#9498A7" }]}>Coming Soon</Text>
      </TouchableOpacity>
    );
  };

  return <View style={styles.container}>{state.routes.map(renderItem)}</View>;
};

export default TabBar;
