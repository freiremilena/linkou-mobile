import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import tags from '../../assets/tagstrend.png'
import feedTrend from '../../assets/feed-trend.png'
import styles from "./style";

export default function Trending() {
  return (
    
    <ScrollView style={{ marginTop: 80}}>
           <View style={{justifyContent: 'flex-start', marginLeft: 15, flexDirection:'row', alignItems: 'flex-start'}}>

              <TouchableOpacity>
                  <Text style={styles.cursosDestaque}> What's trending </Text>
              </TouchableOpacity>

           </View>

              <Text style={{marginTop:-10 }}>
                ____________________________________________________________
              </Text>

      
          <ScrollView horizontal={true}>
            <Image source={tags} style={styles.tagsTrend}/>
          </ScrollView>

          <View style={{alignItems: 'center'}}>
            <Image source={feedTrend} style={styles.feedTrend}/>
          </View>
    </ScrollView>
  );  
}
