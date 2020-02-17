import React from "react";
import View from "../View";
import Text from "../Text";
import Picker from "../Picker";
import colors from "../../styles/colors";

interface ItemOptions {
  label: string;
  value: string | number;
}

interface IHeaderList {
  value: string;
  handleValueChange: (value: string) => void;
  placeholder: string;
  options: [ItemOptions];
}

const HeaderList: React.FunctionComponent<IHeaderList> = props => {
  return (
    <View listHeader>
      <View headerList>
        <Text body color={colors.grey.base}>
          Showing fuel data for:
        </Text>
        <Picker
          selectedValue={props.value}
          onValueChange={props.handleValueChange}
          options={props.options}
          placeholder={props.placeholder}
        />
      </View>
      <View bigLine />
    </View>
  );
};

export default HeaderList;
