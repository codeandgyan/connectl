import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../styles/global-styles";
import Tag from "../Post/Tag";
import HorizontalLine from "../Common/HorizontalLine";
import initials from "initials";
import UserInitials from "../Common/UserInitials";

const PostBodyMessage = ({ postUser, postBody }) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={[globalStyles.text, styles.headlineLabel]}>
        {postBody?.headline}
      </Text>
      <HorizontalLine color={"#a5a5a8"} width={1} />
      <Text style={[globalStyles.text]}>{postBody?.description}</Text>
      <HorizontalLine color={"#a5a5a8"} width={1} />
      <View style={styles.tagContainer}>
        {postBody?.tags?.map((tag) => (
          <Tag tagValue={tag} key={tag} />
        ))}
      </View>
    </View>
  );
};

export default PostBodyMessage;

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    backgroundColor: "#484849",
    borderRadius: 12,
    padding: 12,
    borderTopLeftRadius: 0,
    marginHorizontal: 12,
    marginVertical: 8,
    marginRight: "auto",
    marginLeft: 15,
    minWidth: "60%",
    maxWidth: "80%",
    gap: 8,
  },
  headlineLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tagContainer: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
  },
});
