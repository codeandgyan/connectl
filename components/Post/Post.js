import { StyleSheet, View } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";

import globalStyles from "../../styles/global-styles";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

export default function Post({
  headline,
  description,
  userid,
  tags,
  numberOfLikes,
  numberOfConnections,
}) {
  return (
    <View style={styles.container}>
      <PostHeader userid={userid} />
      <PostBody headline={headline} description={description} tags={tags} />
      <PostFooter
        numberOfLikes={numberOfLikes}
        numberOfConnections={numberOfConnections}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.secondaryContainer.backgroundColor,
    padding: 8,
    flex: 1,
  },
});
