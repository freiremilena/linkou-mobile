import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Model from "../../assets/model.jpeg";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function Post() {
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView>
      <View style={styles.headerPostar}>
        <Feather name="arrow-left" size={20} color="gray" />
        <TouchableOpacity style={styles.ButtonPostar}>
          <Text style={styles.buttonText}>Postar</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.image} source={Model} />

      <View>
        <Text style={styles.title}>Diga algo legal :)</Text>
        <TextInput
          placeholder="Esse acessório é o meu preferido!"
          style={styles.input}
        />

        <Text style={styles.title}>Adicione tags para facilitar sua busca</Text>
        <TextInput
          placeholder="ex: #trend, #vestidovintage..."
          style={styles.input}
        />

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
