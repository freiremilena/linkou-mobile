import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Logo from "../../assets/logo.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Google from "../../assets/google.png";
import styles from "./styles";
import LoginComponent from "../../components/LoginComponent";
import CadastroComponent from "../../components/CadastroComponent";

export default function Login() {
  const [cadastroForm, setCadastroForm] = useState(false);
  const [loginIsPress, setLoginIsPress] = useState(true);
  const [registerIsPress, setRegisterIsPress] = useState(false);


  let bottonTextLogin = "Entre usando:";
  let bottonTextCadastro = "Cadastre usando:";

  function ActiveFormCadastro() {
    setCadastroForm(true);
  }

  function ActiveFormLogin() {
    setCadastroForm(false);
  }

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={Logo} />

        <View style={styles.accessButtons}>
          <TouchableOpacity
            style={styles.accessButton}
            onPress={() => {
              setRegisterIsPress(false);
              setLoginIsPress(true);
              ActiveFormLogin();
            }}
          >
            <View style={{ display: "flex", alignItems: "center" }}>
              <Text
                style={
                  loginIsPress ? styles.textAccessPressed : styles.textAccess
                }
              >
                Login
              </Text>
              {loginIsPress ? (
                <View
                  style={{
                    width: 90,
                    height: 4,
                    backgroundColor: "#EB7E69",
                    marginTop: 2,
                  }}
                ></View>
              ) : null}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.accessButton}
            onPress={() => {
              setLoginIsPress(false);
              setRegisterIsPress(true);
              ActiveFormCadastro();
            }}
          >
            <Text
              style={
                registerIsPress ? styles.textAccessPressed : styles.textAccess
              }
            >
              Cadastro
            </Text>
            {registerIsPress ? (
              <View
                style={{
                  width: 90,
                  height: 4,
                  backgroundColor: "#EB7E69",
                  marginTop: 2,
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
        </View>
        {cadastroForm ? <CadastroComponent />  : <LoginComponent />}

        <Text style={styles.align}>───────────── OU ──────────────</Text>

        <Text>{cadastroForm ? bottonTextCadastro  : bottonTextLogin}</Text>
        <View style={styles.redesSociais}>
          <Image style={styles.redesSociaisIcon} source={Instagram} />
          <Image style={styles.redesSociaisIcon} source={Google} />
          <Image style={styles.redesSociaisIcon} source={Twitter} />
        </View>
      </View>
    </>
  );
}
