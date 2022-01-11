import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  headerPostar: {
    display: "flex",
    flexDirection: "row",
    width: 337,
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  ButtonPostar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFA666",
    borderWidth: 1,
    backgroundColor: "#F2BB94",
    height: 30,
    width: 84,
    borderRadius: 10,
  },


  image: {
    width: 337,
    height: 304,
    marginBottom: 50,
  },

  title: {
    color: "#969595",
    fontSize: 14,
    fontWeight: "normal",
    marginBottom: 10,
  },

  align: {
    marginBottom: 60,
  },

  input: {
    marginBottom: 30,
    padding: 14,
    width: 337,
    height: 46,
    fontSize: 12,
    color: "#969595",
    borderColor: " #969595",
    borderWidth: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFA666",
    borderWidth: 1,
    backgroundColor: "#F2BB94",
    height: 30,
    width: 84,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 10,
  },

  buttonText: {
    color: "#9A460B",
    fontSize: 16,
    fontWeight: "bold",
  },
});
