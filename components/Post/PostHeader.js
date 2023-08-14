import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PostHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={[styles.text]}>JS</Text>
      </View>
      <View style={[styles.postInfo]}>
        <Text style={[styles.text]}>Software Engineering</Text>
        <Text style={[styles.text]}>{'@joesmith • Student • 14h'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  profileContainer: {
    borderColor: "#FFFFFF",
    borderRadius: "50%",
    borderStyle: "solid",
    borderWidth: 2,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
  },
  postInfo: {flex: 1, paddingLeft: 10}
});
