import React from "react";
import { ScrollView, Text, View } from "react-native";
import Card from "../../components/CardPost";

import fotoDePerfil from "../../assets/nanaths1.png";
import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";

export default function Home() {
  return (
    <ScrollView>
      <View style={{ marginTop: 60 }}>
        <Card perfil={fotoDePerfil} foto={post1}/>
        <Card perfil={fotoDePerfil} foto={post1}/>
        <Card perfil={fotoDePerfil} foto={post1}/>
        <Card perfil={fotoDePerfil} foto={post1}/>
        <Card perfil={fotoDePerfil} foto={post1}/>

      </View>
    </ScrollView>
  );
}
