import axios from "axios";
import { useQuery } from "react-query";

const fetchPosts = () => {
  if (process.env.EXPO_PUBLIC_DO_NOT_USE_DUMMY === "true") {
    return axios.get(process.env.EXPO_PUBLIC_GET_POSTS_URL, {
      headers: {
        "X-Access-Key": process.env.EXPO_PUBLIC_X_ACCESS_KEY,
      },
    });
  }
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const usePostsData = () => {
  return useQuery("posts", fetchPosts, {
    staleTime: 300000,
    select: (data) => {
      return getPostsData(data);
    },
  });
};

export const getPostsData = (data) => {
  if (process.env.EXPO_PUBLIC_DO_NOT_USE_DUMMY === "true") {
    return data?.data?.record?.posts;
  }
  return data?.data;
};

export default usePostsData;
