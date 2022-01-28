import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity, Button } from "react-native";
import Card from "../../components/CardPost";
import { FontAwesome5 } from "@expo/vector-icons";
import fotoDePerfil from "../../assets/nanaths1.png";
import post1 from "../../assets/post1.png";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function Home() {
  const [optionsIsPress, setOptionsIsPress] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{ marginTop: 60 }}>
        <View style={styles.options}>
          <TouchableOpacity
            onPress={() => {
              setOptionsIsPress(true);
            }}
          >
            {optionsIsPress ? (
              <TouchableOpacity
                style={{
                  width: 80,
                  height: 30,
                  backgroundColor: "#FFE7EC",
                  zIndex: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  elevation: 4,
                  shadowColor: "#000",
                }}
               onPress={() => {
                navigation.navigate("Login");

               }}>
                <Text style={{ color: "#EB7E69" }}>Sair</Text>
              </TouchableOpacity>
            ) : (
              <FontAwesome5 name="ellipsis-v" size={20} color="gray" />
            )}
          </TouchableOpacity>
        </View>

        <Card perfil={fotoDePerfil} foto={post1} />
        <Card perfil={fotoDePerfil} foto={post1} />
        <Card perfil={fotoDePerfil} foto={post1} />
        <Card perfil={fotoDePerfil} foto={post1} />
        <Card perfil={fotoDePerfil} foto={post1} />
      </View>
    </ScrollView>
  );
}
