import React  from "react";
import { View, Text, Image, Button, Pressable, Touchable, Linking} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


import header from '../../assets/capa.png'
import perfil from '../../assets/fotoperfil.png'
import feed from '../../assets/feed.png'


import styles from './style'

export default function Perfil() {
  return (
   
    <ScrollView>
      
      <View name='header' style={styles.container}>
        <Image source={header}  style={styles.imgCapa}/>
        <Image source={perfil} style={styles.imgPerfil}></Image>
        <Text style={styles.Nome}> 🧚Fada </Text> 

      </View>
    

      <View name='btn-edit' style={styles.Edit}>
           <Pressable style={styles.ButtonEdit}>
              <Text style={{color:'#757474', fontWeight: 'bold', fontSize: 16}}> Editar</Text>
          </Pressable>
      </View>


      <View name='User'>
        <Text style={styles.Name}>Nath Araújo</Text>
        <Text style={styles.userName}>@nanaths</Text>

        <Text style={{marginLeft: 15, marginTop: 20, fontSize: 13}}>Empresária, ilustradora, fashionista e mãe de gato.</Text>
      </View>
      
      <View name='links' style={styles.linksContainer}>

            <View name='Twitter' style={styles.links}>
              <TouchableOpacity>
                <Text style={{fontSize: 12}} onPress={() => Linking.openURL('http://twitter.com/nanaths')}> Twitter</Text>
              </TouchableOpacity>
            </View>
            <View name='Instagram' style={styles.links}>
              <TouchableOpacity>
                <Text style={{fontSize: 12}} onPress={() => Linking.openURL('http://instagram.com/nanaths')}> Instagram </Text>
              </TouchableOpacity>
            </View>
            <View name='Pinterest' style={styles.links}>
              <TouchableOpacity>
                <Text style={{fontSize: 12}} onPress={() => Linking.openURL('https://br.pinterest.com/natharaujoart/')}> Pinterest </Text>
              </TouchableOpacity>
            </View>
            <View name='Youtube' style={styles.links}>
              <TouchableOpacity>
                <Text style={{fontSize: 12}} onPress={() => Linking.openURL('https://www.youtube.com/user/natharaujoart/')}> Youtube </Text>
              </TouchableOpacity>
            </View>
            <View name='Site' style={styles.links}>
              <TouchableOpacity>
                <Text style={{fontSize: 12}} onPress={() => Linking.openURL('https://natharaujo.com/')}> Meu site </Text>
              </TouchableOpacity>
            </View>

      </View>
   

      <View name='midiakit' style={styles.midiaKitContainer} >
          
            <Pressable style={styles.midiaKit}>
              <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', color: '#eb7e69'}}  onPress={() => Linking.openURL('https://www.linkedin.com/in/nath-ara%C3%BAjo-a57a8128/?originalSubdomain=br')}> Confira meu midiakit ♡ </Text>
            </Pressable>
          
      </View>

      <Text style={{textAlign: 'center', color: '#96959587', marginTop: 10}}> ____________________________________________________</Text>

      <View name='fotos'style={{ alignItems: 'center', marginTop: 15, marginBottom: 40}}>
          <Image source={feed} style={styles.Feed}/>
      </View>


    </ScrollView>
  
  );
}
