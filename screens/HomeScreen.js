import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Post from "../components/Post/Post";
import { useQuery } from "react-query";
import axios from "axios";
import { Feather } from "@expo/vector-icons";
import globalStyles from "../styles/global-styles";
import HorizontalLine from "../components/Common/HorizontalLine";

const HomeScreen = ({ navigation }) => {
  const { isLoading: postLoading, data: posts } = useQuery("posts", () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  });

  const { isLoading: userLoading, data: users } = useQuery("users", () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  });

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
        numberOfLikes={27} //TODO: Remove Hardcoding
        numberOfConnections={2} //TODO: Remove Hardcoding
        key={post.id}
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
        data={posts?.data}
        renderItem={renderPost}
        ItemSeparatorComponent={() => (
          <HorizontalLine color={globalStyles.container.backgroundColor} />
        )}
        keyExtractor={(post) => post.id}
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
