import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../styles/global-styles";
import Tag from "./Tag";

const PostBody = ({headline, description}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.postContainer}>
        {/* Headline */}
        <Text style={[globalStyles.text, styles.headline]}>{headline}</Text>
        {/* Description */}
        <Text style={[globalStyles.text, styles.description]}>
          {description}
        </Text>
      </View>
      <View style={styles.tagsContainer}>
        {/* Tags */}
        {/* TODO: Replace Hardcoded values with dynamic */}
        <Tag tagValue={"java"} />
        <Tag tagValue={"react"} />
        <Tag tagValue={"scala"} />
        <Tag tagValue={"OOPS"} />
        <Tag tagValue={"ML"} />
        <Tag tagValue={"microservices"} />
        <Tag tagValue={"web sockets"} />
      </View>
    </View>
  );
};

export default PostBody;

const styles = StyleSheet.create({
  postContainer: {
    flex: 3,
  },
  headline: {
    marginVertical: 12,
    fontSize: 16,
    fontWeight: 700,
  },
  description: {
    minHeight: 120,
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 400,
    color: "#b3b3b6",
  },
  tagsContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    margin: 2,
    flexWrap: "wrap",
  },
});
