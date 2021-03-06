import { StyleSheet } from "react-native";

export default StyleSheet.create({

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
  
  passwordInputText:{
    marginLeft:10,
    marginBottom: 4
  },  

  forgot:{
    width: 310,
    display: "flex",
    alignItems: "flex-end",

  },

  forgotText:{
    marginTop: -8,
    fontWeight: "100",
    fontSize: 12,
    color: "#555555",
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
    marginTop: 95,
    borderRadius: 50,
  },

  buttonDisabled: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#d2d2d2",
    borderWidth: 1,
    backgroundColor: "#d2d2d2",
    height: 40,
    width: 166,
    marginTop: 95,
    borderRadius: 50,
  },

  buttonTextDisabled: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonText: {
    color: "#9A460B",
    fontSize: 16,
    fontWeight: "bold",
  },
 


});
