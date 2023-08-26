import axios from "axios";
import { Alert } from "react-native";
import { useQuery, useMutation, useQueryClient } from "react-query";

const fetchPosts = () => {
  switch (process.env.EXPO_PUBLIC_DATA_SOURCE) {
    case "local":
      return axios.get(process.env.EXPO_PUBLIC_GET_LOCAL_POSTS_URL);
    case "remote":
      return axios.get(process.env.EXPO_PUBLIC_GET_POSTS_URL, {
        headers: {
          "X-Access-Key": process.env.EXPO_PUBLIC_X_ACCESS_KEY,
        },
      });
      break;
    default:
      return axios.get("https://jsonplaceholder.typicode.com/posts");
  }
};

const addPost = (post) => {
  if (!post) {
    console.error("ERROR");
    return; //TODO: Error out
  }
  if (!process.env.EXPO_PUBLIC_GET_LOCAL_POSTS_URL) {
    Alert.alert("Cannot create post!", "API not configured.");
    return;
  }

  return axios.post(process.env.EXPO_PUBLIC_GET_LOCAL_POSTS_URL, post);
};

export const usePostsData = () => {
  return useQuery("posts", fetchPosts, {
    staleTime: 300000,
    select: (data) => {
      return [...getPostsData(data)].sort((a, b) => b.time - a.time);
    },
  });
};

export const getPostsData = (data) => {
  if (process.env.EXPO_PUBLIC_DATA_SOURCE === "remote") {
    return data?.data?.record?.posts;
  }
  return data?.data;
};

export const useAddPostData = () => {
  const queryClient = useQueryClient();
  return useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });
};
