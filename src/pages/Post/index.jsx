import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Model from "../../assets/model.jpeg";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import tagIcon from "../../assets/tagIcon.png"
import lojaIcon from "../../assets/lojaIcon.png"
import aspas from "../../assets/aspas.png"
import { useNavigation } from "@react-navigation/native";


export default function Post() {

  const navigation = useNavigation();
 
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView>
      <View style={styles.headerPostar}>
        <TouchableOpacity onPress={() => {
          navigation.goBack()
        }}>
          <Feather name="arrow-left" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonPostar} onPress={() => {
          navigation.navigate("Home")
        }}>
          <Text style={styles.buttonText}>Postar</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.image} source={Model} />

      <View>
        <Text style={styles.title}>Diga algo legal :)</Text>
        <Image source={aspas} style={{ position: "absolute", bottom: 254, zIndex: 5, left: 8}}/>
        <TextInput
          placeholder="Esse acessório é o meu preferido!"
          style={styles.input}
        />

        <Text style={styles.title}>Adicione tags para facilitar sua busca</Text>
        <Image source={tagIcon} style={{ position: "absolute", bottom: 144, zIndex: 5, left: 8}}/>
        <TextInput
          placeholder="ex: #trend, #vestidovintage..."
          style={styles.input}
        />

        <Image source={lojaIcon} style={{ position: "absolute", bottom: 38, zIndex: 5, left: 8}}/>
        <Text style={styles.title}>Coloque os links das peças aqui</Text>
        <TextInput
          placeholder="ex: http://shein.com/8392839"
          style={styles.input}
        />
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
