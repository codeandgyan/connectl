import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Post from "../components/Post/Post";
import { useQuery } from "react-query";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";

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

  // if (isLoading) {
  //   return (
  //     <View>
  //       <AnimationEffect />
  //     </View>
  //   );
  // }

  return (
    <>
      <FlatList
        style={styles.container}
        data={posts?.data}
        renderItem={renderPost}
        keyExtractor={(post) => post.id}
      />
      <TouchableOpacity style={styles.addPost}>
        <Pressable
          style={styles.plusButton}
          onPress={() => navigateTo("CreatePost")}
        >
          <Entypo name="plus" size={48} color="white" />
        </Pressable>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4B4B50",
    flex: 1,
  },
  addPost: {
    position: "absolute",
    flex: 1,
    left: "40%",
    right: '40%',
    bottom: 80,
  },
  plusButton: {
    backgroundColor: "#5271FF",
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
