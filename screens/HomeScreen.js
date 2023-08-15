import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Post from "../components/Post/Post";
import { useQuery } from "react-query";
import axios from "axios";

const HomeScreen = () => {
  const { isLoading: postLoading, data: posts } = useQuery("posts", () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  });

  const { isLoading: userLoading, data: users } = useQuery("users", () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  });

  const renderPost = (post) => {
    const postData = post.item;
    return <Post headline={postData.title} description={postData.body} userid={postData.userId}/>;
  };

  // if (isLoading) {
  //   return (
  //     <View>
  //       <AnimationEffect />
  //     </View>
  //   );
  // }

  return (
    <FlatList style={styles.container} data={posts?.data} renderItem={renderPost} keyExtractor={post => post.id} />
    // <View style={styles.container}>
    //   <Post />
    //   <Post />
    //   <Post />
    // </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4B4B50",
    flex: 1,
  },
  text: {
    color: "#FFFFFF",
  },
});
