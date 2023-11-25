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
  input: {
    width: "100%",
    padding: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 10,
    lineHeight: 10,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
    color: "gray",
  },
  link: {
    fontSize: 10,
    lineHeight: 10,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
    color: "gray",
    textDecorationLine: "underline",
  },
  inputError: {
    width: "100%",
    padding: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "red",
    borderWidth: 1,
  },
});
