import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Logo from "../../assets/logo.png";
import styles from "./styles";

export default function Forgot() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
      <Text style={styles.title}>Recupere seu login</Text>
      <Text style={styles.align}>─────────────</Text>
      <View>
        <Text style={styles.emailInputText}>E-mail</Text>
        <TextInput
          onChangeText={(text) => setEmailValue(text)}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.goBack()
          }}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
