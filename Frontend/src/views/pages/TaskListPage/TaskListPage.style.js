import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 16,
  },
  buttonFloatingContent: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    marginBottom: 7,
    width: 60,
    height: 60,
    right: 16,
    bottom: 16,
    zIndex: 10,
  },
  buttonContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 7,
  },
  buttonHeader: {
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonFloatingText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 14,
    lineHeight: 30,
    fontWeight: "bold",
    color: "#000000",
  },
  description: {
    fontSize: 10,
    marginBottom: 10,
    color: "#C4C4C4",
  },
  taskIten: {
    padding: 7,
    borderRadius: 5,
    marginBottom: 2,
  },
  taskToolsHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
