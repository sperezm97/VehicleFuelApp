import React from "react";
import { Icon, Fab } from "native-base";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import View from "../View";

interface FloatButton {
  onPress: () => void;
}

const FloatButton: React.FunctionComponent<FloatButton> = props => {
  return (
    <Fab
      style={{
        backgroundColor: colors.red
      }}
      position="bottomRight"
      onPress={props.onPress}
    >
      <View center>
        <Icon name="add" active style={{ fontSize: 32, color: colors.white }} />
      </View>
    </Fab>
  );
};

export default FloatButton;
