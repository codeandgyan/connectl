import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/global-styles";

const ChatScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <Pressable onPress={() => navigation.navigate("Main")}>
        <Ionicons name="arrow-back-sharp" size={48} color="black" />
      </Pressable>
      <Text>ChatScreen</Text>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {},
});
