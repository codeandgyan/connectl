import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreatePostScreen from "./screens/CreatePostScreen";
import ChatScreen from "./screens/ChatScreen";
import React from "react";
import useAuth from "./hooks/useAuth";
import LoginScreen from "./screens/LoginScreen";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {user ? (
        <>
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
              animation: "slide_from_bottom",
            }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: true,
              header: Header,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
