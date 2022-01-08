import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Logo from "../../assets/logo.png";
import styles from "./styles";

export default function Forgot() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
      <Text style={styles.title}>Recupere seu login</Text>
      <Text style={styles.align}>─────────────</Text>
      <TextInput placeholder="email" style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
