import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import like from "../../assets/like.png";
import arrowRight from "../../assets/arrow-right.png";
import { Entypo } from "@expo/vector-icons";

export default function Card(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.postHeader}>
          <Image source={props.perfil} style={styles.perfil} />
          <Text>@nanaths</Text>
        </View>
        <View style={styles.postContainer}>
          <Image source={props.foto} style={styles.post1} />
          <View style={styles.postFooter}>
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>#miniskirt</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>#miniskirt</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>#miniskirt</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>#miniskirt</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.postActions}>
            <Image source={like} style={styles.like} />
            <Image source={arrowRight} style={styles.arrowRight} />
            <TouchableOpacity style={styles.verMais}>
              <Text style={styles.verMaisText}>
                onde encontrar peças{" "}
                <Entypo
                  name="triangle-right"
                  size={14}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
