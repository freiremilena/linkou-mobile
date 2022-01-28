import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 86
  },

  image: {
    width: 91,
    height: 82,
    marginBottom: 60,
  },

  title: {
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 10,
  },

  align: {
    marginBottom: 60,
  },

  input: {
    marginBottom: 16,
    padding: 14,
    width: 310,
    height: 46,
    borderColor: "#E7AFA4",
    borderWidth: 1,
    backgroundColor: "#FFF4F6",
    borderRadius: 10,
  },

  emailInputText:{
    marginLeft:10,
    marginBottom: 4
  },  
  

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFA666",
    borderWidth: 1,
    backgroundColor: "#F2BB94",
    height: 40,
    width: 166,
    marginTop: 36,
    borderRadius: 50,
  },

  buttonText: {
    color: "#9A460B",
    fontSize: 16,
    fontWeight: "bold",
  },
});
