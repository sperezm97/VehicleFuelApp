import React from "react";
import { Container, Header, View, Text } from "../../comon/components";
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
