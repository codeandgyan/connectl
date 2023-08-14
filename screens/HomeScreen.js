import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Post from "../components/Post/Post";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Post />
      <Post />
      <Post />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4B4B50",
    flex: 1,
  },
  text: {
    color: "#FFFFFF",
  },
});
