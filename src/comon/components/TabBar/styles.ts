import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 84,
    paddingBottom: 34,
    elevation: 8,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    shadowColor: "#00000080",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 5
  },
  onPressContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    opacity: 1
  },
  icon: {
    fontSize: 24,
    fontWeight: "normal",
    fontStyle: "normal"
  },
  label: {
    textAlign: "center",
    backgroundColor: "transparent",
    fontSize: 11,
    marginBottom: 1.5
  }
});

export default styles;
