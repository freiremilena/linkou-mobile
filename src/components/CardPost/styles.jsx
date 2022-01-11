import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 460
    
  },
  postContainer: {
    width: 350,
    height: 0,
    backgroundColor: "#fffd",
    elevation: 8,
    shadowColor: "#000",
  },
  postHeader: {
      display: "flex",
      flexDirection: "row",
    width: 350,
    height: 46,
    backgroundColor: "#fff",
    elevation: 8,
    shadowColor: "#000",
    alignItems: "center"
  },
  perfil: {
    marginLeft: 10,
    marginRight: 8
  },
  post1: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
  },
  postFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    width: 350,
    height: 40,
    marginTop: -12,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
  },
  tag:{
      backgroundColor: "#F2BB94",
      width: 80,
      height: 20,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
  },
  tagText:{
    fontSize: 12,
    color: "#9A460B"
  },
  postActions:{
      height: 50,
      backgroundColor: "red",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 8,
      width: 350,
      alignItems:"center",
      marginTop: 1,
      backgroundColor: "#fff",
      elevation: 4,
      shadowColor: "#000",
  },
  like:{
      marginLeft: 4
  },
  verMaisText:{
    fontSize: 15,
    color: "#EB7E69",
    fontWeight: "bold"
  },
  arrowRight:{
      marginLeft: -60
  }


});
