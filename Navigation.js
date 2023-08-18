import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreatePostScreen from "./screens/CreatePostScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Footer}
          options={{
            headerShown: true,
            header: Header,
          }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{
            headerShown: false,
            animation: "slide_from_bottom"
          }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
