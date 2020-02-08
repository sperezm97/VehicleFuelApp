import React from "react";
import { View, Text } from "react-native";
import { FlatList, ScrollView } from "react-native";

const BaseList = props => {
  return (
    <ScrollView>
      <FlatList
        data={props.data}
        renderItem={props.renderItem}
        ListHeaderComponent={props.header}
      />
    </ScrollView>
  );
};

export default BaseList;
