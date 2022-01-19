import React, { Component } from "react";
import { View, Text, TextInput, Touchable, TouchableOpacity, Image} from "react-native";
import styles from './style';
import cursos from '../../assets/cursos.png'
import cursos2 from '../../assets/cursos2.png'
import cursos3 from '../../assets/cursos3.png'

import { ScrollView } from "react-native-gesture-handler";


export default function Cursos() {

  return (
  
    <ScrollView style={{ marginTop: 80}}>
              {/* tab nav */}
          <View style={{justifyContent: 'flex-start', marginLeft: 20, flexDirection:'row', alignItems: 'flex-start'}}>

              <TouchableOpacity>
                  <Text style={styles.cursosDestaque}> Cursos destaque </Text>
              </TouchableOpacity>
              
              
              <TouchableOpacity>  
                  <Text style={styles.meusCursos} > Meus cursos </Text>  
              </TouchableOpacity>
          </View>
          <Text style={{marginTop:-10 }}>
                ____________________________________________________________
          </Text>



          {/* cursos destaque */}
          <ScrollView horizontal={true} >  
            <Image source={cursos}  style={styles.imgDestaque}/>
          </ScrollView>



        <View style={styles.cursosTemasContainer}>
          
                  <Text style={styles.cursosTemas} > Outros temas interessantes </Text>
         

          <Image source={cursos2}  style={styles.imgTemas}/>
          <Text style={{marginTop: 60, color: '#929292', fontSize: 12, textAlign: 'center'}}>
                _________________    Aperfeiçoe suas skills    _________________
          </Text>

          
          <Image source={cursos3}  style={styles.imgBtn}/>
          <Text style={{color: '#929292'}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>

        </View>
          

          <View id='#' style={{alignItems: 'center', marginBottom: 40}}>
            <Text  style={styles.cursosCert}> Meus certificados </Text>
            
            <TouchableOpacity>
                  <View style={styles.cardCursos} >
                    <Text  style={styles.textCard}> Marketing Digital </Text>
                      <Text> Daniel Almeida | 20h </Text>
                  </View>
            </TouchableOpacity>

            <TouchableOpacity>
                  <View style={styles.cardCursos}>  
                    <Text style={styles.textCard}> Psicologia das cores </Text>
                      <Text> Juliana Braz | 20h </Text>
                  </View>
            </TouchableOpacity>
              
            <TouchableOpacity>
                  <View style={styles.cardCursos}>  
                    <Text style={styles.textCard}> Edição de imagens </Text>
                      <Text> Denise Macedo | 20h </Text>
                  </View>
            </TouchableOpacity>
                
            
          </View>


    </ScrollView>
  )

}

