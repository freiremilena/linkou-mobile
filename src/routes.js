import React from "react";
import { View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";


import Home from "./pages/Home";
import Post from "./pages/Post";
import Trending from "./pages/Trending";
import Cursos from "./pages/Cursos";
import Perfil from "./pages/Perfil";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 50,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 30,
          height: 30,
        },
        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
        },
        showLabel: false,
        inactiveBackgroundColor: "#fafafc",
        inactiveTintColor: "#c1bccc",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? "#EB7E69" : "#5F5D5D"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name="hashtag"
                size={20}
                color={focused ? "#EB7E69" : "#5F5D5D"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="pluscircle"
                size={20}
                color={focused ? "#EB7E69" : "#5F5D5D"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cursos"
        component={Cursos}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="certificate-outline"
                size={24}
                color={focused ? "#EB7E69" : "#5F5D5D"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name="user-circle-o"
                size={20}
                color={focused ? "#EB7E69" : "#5F5D5D"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
