import { FlatList, Platform, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Post from "../components/Post/Post";
import { Feather } from "@expo/vector-icons";
import globalStyles from "../styles/global-styles";
import HorizontalLine from "../components/Common/HorizontalLine";
import { usePostsData } from "../hooks/usePostsData";
import useUsersData from "../hooks/useUsersData";

const HomeScreen = ({ navigation }) => {
  const { isLoading: userLoading, data: users } = useUsersData();
  const { isLoading: postLoading, data: posts } = usePostsData();

  const navigateTo = (toScreen) => {
    navigation.navigate(toScreen);
  };

  const renderPost = (post) => {
    const postData = post.item;
    return (
      <Post
        headline={postData.title}
        description={postData.body}
        userid={postData.userId}
        tags={
          postData.tags?.length > 0
            ? postData.tags
            : ["Java", "Scala", "OOPS", "ML", "Microservices", "Web sockets"] // TODO: Temporarily hardcoded, this can be removed.
        }
        categoryid={postData.catid ?? "cat1"} // TODO: Temporarily hardcoded, this can be removed.
        time={postData.time ?? 1693039402561} // TODO: Temporarily hardcoded, this can be removed.
        numberOfLikes={27} //TODO: Remove Hardcoding
        numberOfConnections={2} //TODO: Remove Hardcoding
        key={`post-${post.id}`}
      />
    );
  };

  // TODO: show loading animation
  // if (isLoading) {
  //   return (
  //     <View>
  //       <AnimationEffect />
  //     </View>
  //   );
  // }

  return (
    <>
      {/* Posts Feed */}
      <FlatList
        style={[
          globalStyles.container,
          styles.container,
          Platform.OS === "ios" ? { marginBottom: 76 } : { marginBottom: 48 },
        ]}
        // data={posts?.data}
        data={posts}
        renderItem={renderPost}
        ItemSeparatorComponent={() => (
          <HorizontalLine color={globalStyles.container.backgroundColor} />
        )}
        keyExtractor={(post) => `post-${post.id}`}
      />
      {/* Floating + icon */}
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => navigateTo("CreatePost")}
      >
        <Feather name="plus" size={44} color={globalStyles.text.color} />
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plusButton: {
    position: "absolute",
    flex: 1,
    left: "40%",
    right: "40%",
    bottom: 80,
    backgroundColor: "#5271FF",
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
