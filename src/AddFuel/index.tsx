import React from "react";
import {} from "react-native";
import { Container, Header, View, Text } from "../app/components";
import { Content } from "native-base";

const AddFuel = () => {
  const onSave = () => {};
  return (
    <Container>
      <Header onPressSave={onSave} />
      <Content></Content>
    </Container>
  );
};

export default AddFuel;
