import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQueryClient } from "react-query";
import initials from "initials";
import globalStyles from "../../styles/global-styles";
import { getUsersData } from "../../hooks/useUsersData";
import { convertEpochToRelativeTime } from "../../helpers/timeUtil";
import { getCategoryById } from "../Common/CategoryList";

export default function PostHeader({ userid, categoryid, time }) {
  const queryClient = useQueryClient();
  const users = getUsersData(queryClient.getQueryData("users"));
  const postUser = users?.find((user) => user?.id === userid);
  const categoryInfo = getCategoryById(categoryid);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={[globalStyles.text, styles.profileLabel]}>
          {initials(postUser?.name)}
        </Text>
      </View>
      <View style={[styles.postInfo]}>
        <Text style={[globalStyles.text, styles.nameLabel]}>
          {postUser?.name}
        </Text>
        <Text style={styles.categoryLabel}>{categoryInfo?.category}</Text>
        <Text
          style={[globalStyles.text, styles.userInfoLabel]}
        >{`@${postUser?.username?.toLowerCase()} • ${convertEpochToRelativeTime(
          time
        )}`}</Text>
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
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
  profileLabel: {
    fontSize: 16,
    fontWeight: 400,
  },
  postInfo: { flex: 1, paddingLeft: 10 },
  nameLabel: {
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 600,
    paddingVertical: 2,
  },
  categoryLabel: {
    color: "#38B6FF",
    alignSelf: "flex-start",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#38B6FF",
    paddingHorizontal: 4,
    paddingVertical: 2,
    fontSize: 12,
    fontFamily: "",
    marginVertical: 4,
  },
  userInfoLabel: {
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: 400,
    color: "#b3b3b6",
  },
});
