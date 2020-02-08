import { Dimensions } from "react-native";

export default {
  none: 0,
  extraTight: 4,
  tight: 8,
  baseTight: 12,
  base: 16,
  loose: 20,
  extraLoose: 32,

  deviceWidth: Dimensions.get("window").width,
  deviceHeight: Dimensions.get("window").height
};
