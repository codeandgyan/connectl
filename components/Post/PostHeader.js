import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQueryClient } from "react-query";
import initials from "initials";

export default function PostHeader({userid}) {
const queryClient = useQueryClient();
const users = queryClient.getQueryData("users");
const postUser = users.data.find((user) => user.id === userid);
console.log("postUser", postUser);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={[styles.text]}>{initials(postUser.name)}</Text>
      </View>
      <View style={[styles.postInfo]}>
        <Text style={[styles.text]}>{postUser.name}</Text>
        <Text style={[styles.text]}>{`@${postUser.username.toLowerCase()} • Student • 14h`}</Text>
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
    borderRadius: 50,
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
