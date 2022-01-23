import React, { useState } from "react";
import { Text, TouchableOpacity, View, Input, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function CadastroComponent() {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const navigation = useNavigation();

  function enter() {
    navigation.navigate("Rotas");
  }

  function forgot() {
    navigation.navigate("Forgot");
  }

  return (
    <>
      <View>
        <Text style={styles.userNameInputText}>Username</Text>
        <TextInput style={styles.input} />
      </View>

      <View>
        <Text style={styles.emailInputText}>E-mail</Text>
        <TextInput style={styles.input} />
      </View>

      <View>
        <Text style={styles.passwordInputText}>Senha</Text>
        <TextInput
          onChangeText={(text) => setPasswordValue(text)}
          value={passwordValue}
          style={styles.input}
        />
      </View>
 
      <TouchableOpacity style={styles.button} onPress={() => enter()}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </>
  );
}
