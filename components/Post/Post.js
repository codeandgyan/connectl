import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import { AntDesign } from '@expo/vector-icons';

export default function Post({headline, description, userid}) {
  return (
    <View style={styles.container}>
      <PostHeader userid={userid} />
      {/* PostHeadline */}
      <Text style={[styles.text, styles.headline]}>
        {headline}
      </Text>
      {/* PostBody */}
      <Text style={[styles.text, styles.body]}>
        {description}
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
