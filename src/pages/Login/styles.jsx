import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },

  image: {
    width: 91,
    height: 82,
    marginBottom: 40,
    marginTop: 40
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
    marginTop: 62,
    borderRadius: 50,
  },
  buttonText: {
    color: "#9A460B",
    fontSize: 16,
    fontWeight: "bold",
  },
  redesSociais: {
    flexDirection: "row",
  },

  redesSociaisIcon: {
    width: 48,
    height: 48,
    marginTop: 40,
    margin: 6,
  },

  align: {
    marginTop: 40,
    marginBottom: 20,
  },
  accessButtons: {
    maxWidth: 310,
    minWidth: 310,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding:20,
    marginBottom: -32

  },
  accessButton: {
    fontSize: 24,
    marginBottom: 48,
    width: 94

  },

  accessButtonPressed: {
    fontSize: 24,
    marginHorizontal: 40,
    marginBottom: 48,
  },

  textAccess:{
    color: "#989494",
    fontSize: 21,
    fontWeight: "500"
  },

  textAccessPressed:{
    color: "#000",
    fontSize: 21,
    fontWeight: "500"
  }
});
