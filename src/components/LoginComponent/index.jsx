import React, { useState } from "react";
import { Text, TouchableOpacity, View, Input, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function LoginComponent() {
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
        <Text style={styles.emailInputText}>E-mail</Text>
        <TextInput
          onChangeText={(text) => setEmailValue(text)}
          value={emailValue}
          style={styles.input}
        />
      </View>

      <View>
        <Text style={styles.passwordInputText}>Senha</Text>
        <TextInput
          onChangeText={(text) => setPasswordValue(text)}
          value={passwordValue}
          style={styles.input}
        />
      </View>
      <View style={styles.forgot}>
        <TouchableOpacity onPress={() => forgot()}>
          <Text style={styles.forgotText}>Esqueceu da senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => enter()}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </>
  );
}
