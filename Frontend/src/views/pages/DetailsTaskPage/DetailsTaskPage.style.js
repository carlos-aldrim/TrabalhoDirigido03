import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 16,
  },
  buttonContent: {
    backgroundColor: "#097c7c",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonDisabled: {
    opacity: 0.5,
    cursor: "no-allowed",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: "gray",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    width: "100%",
    padding: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "gray",
  },
});
