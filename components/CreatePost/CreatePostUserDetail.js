import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { Entypo } from "@expo/vector-icons";
import initials from "initials";
import globalStyles from "../../styles/global-styles";
import { getUsersData } from "../../hooks/useUsersData";

export default function CreatePostUserDetail({
  userid,
  selectACategory,
  selectedCategory,
}) {
  const queryClient = useQueryClient();
  const users = getUsersData(queryClient.getQueryData("users"));
  const postUser = users?.find((user) => user?.id === userid);
  console.log("postUser", postUser);

  // const [category, setCategory] = useState({
  //   categoryId: 0,
  //   categoryText: selectedCategory,
  // });

  const onPressSelectCategory = () => {
    if (selectACategory) {
      selectACategory();
    }
  };

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
        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => onPressSelectCategory()}
        >
          <Text style={styles.categoryLabel}>{selectedCategory}</Text>
          <Entypo
            name="chevron-down"
            size={20}
            color={styles.categoryLabel.color}
          />
        </TouchableOpacity>
        <Text
          style={[globalStyles.text, styles.userInfoLabel]}
        >{`@${postUser?.username?.toLowerCase()} • Student • 14h`}</Text>
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
    fontSize: 14,
    fontWeight: 400,
  },
  postInfo: { flex: 1, paddingLeft: 10 },
  nameLabel: {
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 600,
    paddingVertical: 2,
  },
  categoryContainer: {
    flexDirection: "row",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#38B6FF",
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginVertical: 4,
    alignSelf: "flex-start",
    alignItems: "center",
  },
  categoryLabel: {
    color: "#38B6FF",
    fontSize: 12,
  },
  userInfoLabel: {
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: 400,
    color: "#b3b3b6",
  },
});
