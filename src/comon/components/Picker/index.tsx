import React from "react";
import { Picker as NbPicker } from "native-base";
import colors from "../../styles/colors";
import Icon from "../Icon";

interface Options {
  label: string;
  value: string | number;
}

interface ConfigPicker {
  selectedValue: string;
  onValueChange: (value: String) => void;
  options: [Options];
  placeholder: string;
}

const Picker: React.FunctionComponent<ConfigPicker> = props => {
  const renderItem = item => (
    <NbPicker.Item
      key={item.label}
      label={item.label}
      value={item.value}
      color={colors.black}
    />
  );

  return (
    <NbPicker
      mode="dropdown"
      iosHeader="All Vehicles"
      iosIcon={<Icon name="arrow-down" kind="collapse" />}
      style={{}}
      selectedValue={props.selectedValue}
      onValueChange={props.onValueChange}
      headerStyle={{}}
      headerTitleStyle={{}}
      headerBackButtonText="back"
      headerBackButtonTextStyle={{}}
      placeholder={props.placeholder}
      supportedOrientations="portrait"
      textStyle={{}}
    >
      {props.options.map(renderItem)}
    </NbPicker>
  );
};

export default Picker;
