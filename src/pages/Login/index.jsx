import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Logo from "../../assets/logo.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Google from "../../assets/google.png";
import styles from "./styles";

const info = {
  email: "",
  Password: "",
};

export default function Login() {
  // const navigation = useNavigation();
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  // function navigateToHome() {
  //   navigation.navigate("Home");
  // }
  function login() {}

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={Logo} />

        <View style={styles.accessButtons}>
          <TouchableOpacity style={styles.accessButton}>Login</TouchableOpacity>
          <TouchableOpacity style={styles.accessButton}>
            Cadastro
          </TouchableOpacity>
        </View>

        <TextInput
          onChangeText={(text) => setEmailValue(text)}
          value={emailValue}
          style={styles.input}
        />

        <TextInput
          onChangeText={(text) => setPasswordValue(text)}
          value={passwordValue}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.align}>───────────── OU ──────────────</Text>

        {/* icones-redes sociais */}
        <Text>Entre usando:</Text>
        <View style={styles.redesSociais}>
          <Image style={styles.redesSociaisIcon} source={Instagram} />
          <Image style={styles.redesSociaisIcon} source={Google} />
          <Image style={styles.redesSociaisIcon} source={Twitter} />
        </View>
      </View>
    </>
  );
}
