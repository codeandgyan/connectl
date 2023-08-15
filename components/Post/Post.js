import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../../styles/global-styles";

export default function Post({
  headline,
  description,
  userid,
  numberOfLikes,
  numberOfConnections,
}) {
  return (
    <View style={styles.container}>
      <PostHeader userid={userid} />
      {/* PostHeadline */}
      <Text style={[globalStyles.text, styles.headline]}>{headline}</Text>
      {/* PostBody */}
      <Text style={[globalStyles.text, styles.body]}>{description}</Text>
      {/* PostFooter */}
      <View style={styles.footer}>
        <View style={styles.statsBox}>
          <AntDesign name="hearto" size={24} color="white" />
          <Text style={[globalStyles.text, styles.statsLabel]}>
            {numberOfLikes}
          </Text>
        </View>
        {/* <View style={styles.statsBox}>
          <MaterialIcons
            name="connect-without-contact"
            size={32}
            color="white"
          />
          <Text style={[globalStyles.text, styles.statsLabel]}>
            {numberOfConnections}
          </Text>
        </View> */}
        <Pressable style={styles.chatButton}>
          <Text style={[globalStyles.text, styles.chatLabel]}>Chat</Text>
        </Pressable>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: 42,
  },
  statsLabel: {
    fontSize: 13,
    fontWeight: 500,
  },
  chatButton: {
    // backgroundColor: "#5271FF",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 25,
    width: 102,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  chatLabel: {
    fontSize: 16,
    fontWeight: 600,
  },
});
