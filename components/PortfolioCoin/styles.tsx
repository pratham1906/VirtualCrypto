import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    width: "77%",
    justifyContent: "space-between",
    height: 50,
    margin: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  symbol: {
    color: "#6b6b6b",
  },
  left: {
    flexDirection: "row",
  },
  value: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});

export default styles;
