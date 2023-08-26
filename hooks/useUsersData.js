import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = () => {
  switch (process.env.EXPO_PUBLIC_DATA_SOURCE) {
    case "local":
      return axios.get(process.env.EXPO_PUBLIC_GET_LOCAL_USERS_URL);
    case "remote":
      return axios.get(process.env.EXPO_PUBLIC_GET_USERS_URL, {
        headers: {
          "X-Access-Key": process.env.EXPO_PUBLIC_X_ACCESS_KEY,
        },
      });
    default:
      return axios.get("https://jsonplaceholder.typicode.com/users");
  }
};

const useUsersData = () => {
  return useQuery("users", fetchUsers, {
    staleTime: 300000,
    select: (data) => {
      return data?.data?.record?.users;
    },
  });
};

export const getUsersData = (data) => {
  if (process.env.EXPO_PUBLIC_DATA_SOURCE === "remote") {
    return data?.data?.record?.users;
  }
  return data?.data;
};

export default useUsersData;
