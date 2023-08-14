import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import { AntDesign } from '@expo/vector-icons';

export default function Post() {
  return (
    <View style={styles.container}>
      <PostHeader />
      {/* PostHeadline */}
      <Text style={[styles.text, styles.headline]}>
        Seeking career guidance
      </Text>
      {/* PostBody */}
      <Text style={[styles.text, styles.body]}>
        I’ve completed my bachelor in Computer Science Engineering. I want to
        get into Artificial Intelligence and machine learning, but I have no
        idea on where to start. I would appreciate any working professionals on
        the field of Software Engineering to provide guidance to me to get
        started.
      </Text>
      {/* PostFooter */}
      <View style={styles.footer}>
        <AntDesign name="like2" size={24} color="white" />
        <Text style={styles.text}>27</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181818",
    marginTop: 2,
    paddingHorizontal: 22,
    paddingVertical: 15,
  },
  text: {
    color: "#FFFFFF",
  },
  headline: {
    marginVertical: 12,
    fontSize: 16,
    fontWeight: 700,
  },
  body: {
    minHeight: 120,
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 400,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
