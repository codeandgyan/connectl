import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../styles/global-styles";
import Tag from "./Tag";

const PostBody = ({ headline, description, tags }) => {
  return (
    <View style={styles.container}>
      {tags?.length > 0 && (
        <View style={styles.tagsContainer}>
          {tags?.map((tag) => (
            <Tag tagValue={tag} key={`tag-${tag.replace(" ", "")}`} />
          ))}
        </View>
      )}
      <View style={styles.postContainer}>
        {/* Headline */}
        <Text style={[globalStyles.text, styles.headline]}>{headline}</Text>
        {/* Description */}
        <Text style={[globalStyles.text, styles.description]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default PostBody;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  tagsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    margin: 2,
    paddingRight: 4,
    flexWrap: "wrap",
    borderStyle: "solid",
  },
  postContainer: {
    flex: 3,
    justifyContent: "center",
    paddingLeft: 8,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: "#b3b3b6",
  },
  headline: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 8,
  },
  description: {
    minHeight: 64,
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 400,
    color: "#b3b3b6",
  },
});
