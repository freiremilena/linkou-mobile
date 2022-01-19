import { StyleSheet } from "react-native";

export default StyleSheet.create(
  {
    container:{
        alignItems: 'center'
      },
    imgCapa:{
        width: '100%',
        height: 75,
        margin: 0
    },
    imgPerfil:{
        width: 90,
        height: 90,
        marginTop: -35

    },
   
    ButtonEdit:{
        borderWidth: 2, 
        backgroundColor: '#EFEFEF',
        borderColor: '#B8B8B8',
        width: 95,
        height: 30,
        alignItems: 'center',
        borderRadius: 8,
        textAlign: 'center'
    },

    Edit:{
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginTop: -70,
        marginBottom: 50
    },
    Nome:{
        fontSize: 18,
        color: '#FF37A3',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginTop: 5
    },
    Name:{
        fontSize: 20,
        marginLeft: 15,
        fontWeight: 'bold'
    },

    userName:{
        fontSize: 16,
        marginTop: - 3,
        marginLeft: 15,
        color: '#515151'
    },
    links:{
        height: 33,
        backgroundColor: '#fff',
        marginTop: 15,
        padding: 8,
        borderRadius: 10,
        margin: 0,
        elevation: 3,
        shadowColor: '#000'
    },
    linksContainer:{
        flex:1,
        margin: 8,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    midiaKitContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    midiaKit:{
        borderRadius: 15,
        height: 35,
        width: 200,
        marginTop: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#eb7e69'
    },
    Feed:{
        width: '95%',
        height: 540
    }


  }
    )
