import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Routes from "./src/routes";
import { createStackNavigator } from '@react-navigation/stack'
import Post from "./src/pages/Post";
import Login from "./src/pages/Login";

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Rotas" component={Routes} options={{ headerShown: false }}/>
        <Stack.Screen name="Post" component={Post} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}
