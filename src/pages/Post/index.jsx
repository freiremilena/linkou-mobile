import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function Post() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
      <Text style={styles.title}>Diga algo legal:)</Text>
      <Text style={styles.align}>─────────────</Text>
      <TextInput placeholder="Esse acessó" style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
