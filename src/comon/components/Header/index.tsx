import React from "react";
import View from "../View";
import Text from "../Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../Icon";
import { useNavigation } from "@react-navigation/native";

interface ConfigHeader {
  onPressSave: () => void;
}

const Header: React.FunctionComponent<ConfigHeader> = props => {
  const navigation = useNavigation();

  const onPressClose = () => {
    navigation.goBack();
  };

  return (
    <View headerContainer>
      <View headerLeft>
        <TouchableOpacity onPress={() => onPressClose()}>
          <Icon name="window-close" type="MaterialCommunityIcons" />
        </TouchableOpacity>
      </View>
      <View headerRight>
        <TouchableOpacity onPress={props.onPressSave}>
          <Text>Save</Text>
          <Icon name="content-save" type="MaterialCommunityIcons" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
