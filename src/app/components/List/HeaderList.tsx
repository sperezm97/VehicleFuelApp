import React from "react";
import View from "../View";
import Text from "../Text";
import Picker from "../Picker";
import colors from "../../styles/colors";
import IHeaderList from "../../types/HeaderList";

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
