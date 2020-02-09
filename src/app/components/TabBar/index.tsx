import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "native-base";
import styles from "./styles";

const TabBar = ({ state, descriptors, navigation, icons }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={label}
            onPress={onPress}
            style={styles.onPressContainer}
          >
            <View style={{ flex: 1 }}></View>
            <Icon
              name={icons[index].name}
              type={icons[index].type}
              style={[
                ,
                styles.icon,
                {
                  color: isFocused ? "#E4222B" : "#9498A7"
                }
              ]}
            />
            <View>
              <Text
                style={[
                  styles.label,
                  {
                    color: isFocused ? "#000" : "#9498A7"
                  }
                ]}
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
