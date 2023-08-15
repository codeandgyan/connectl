import { Pressable, StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CreatePostScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate("Main")}>
        <Ionicons name="arrow-back-sharp" size={48} color="black" />
      </Pressable>
      <Text>CreatePostScreen</Text>
    </SafeAreaView>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({});
