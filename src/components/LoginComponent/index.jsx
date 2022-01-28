import React, { useState } from "react";
import { Text, TouchableOpacity, View, Input, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function LoginComponent() {
  const [emailInput, setEmailInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const navigation = useNavigation();

  function enter() {

    let data = {
      email: emailInput,
      password: senhaInput
    }

    if ( (data.email == "milena@email.com" || data.email == "Milena@email.com") && data.password == "12345") {
      setErrorLogin(false)
      setEmailInput("")
      setSenhaInput("")
      navigation.navigate("Rotas");
    }
    else{
      setErrorLogin(true)
    }
  }

  function forgot() {
    navigation.navigate("Forgot");
  }

  return (
    <>
      <View>
        <Text style={styles.emailInputText}>E-mail</Text>
        <TextInput
          onChangeText={(text) => setEmailInput(text)}
          value={emailInput}
          style={styles.input}
        />
      </View>

      <View>
        <Text style={styles.passwordInputText}>Senha</Text>
        <TextInput
          onChangeText={(text) => setSenhaInput(text)}
          value={senhaInput}
          style={styles.input}
        />
      </View>

      <View style={styles.forgot}>
        <TouchableOpacity onPress={() => forgot()}>
          <Text style={styles.forgotText}>Esqueceu da senha?</Text>
        </TouchableOpacity>
      </View>

      {errorLogin === true ? (
          <Text style={{ marginTop: 22, color:"red" }}>Email ou senha errada</Text>
      ) : (
        <View />
      )}
      {emailInput === "" || senhaInput === "" ? (
        <TouchableOpacity
          disabled={true}
          style={styles.buttonDisabled}
          onPress={() => enter()}
        >
          <Text style={styles.buttonTextDisabled}>Entrar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => enter()}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      )}
    </>
  );
}
