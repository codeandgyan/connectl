import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { StyleSheet } from "react-native";
import globalStyles from "../styles/global-styles";

const Tab = createBottomTabNavigator();

function Footer() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: globalStyles.secondaryContainer.backgroundColor,
          position: "absolute",
          bottom: 0,
          left: 0,
          // shadowOpacity: 2,
          // shadowRadius: 2,
          elevation: 4,
          shadowOffset: {
            width: 0,
            height: -4,
          },
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: styles.default.color },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color={styles.selected.color} />
            ) : (
              <AntDesign name="home" size={24} color={styles.default.color} />
            ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarLabel: "Discover",
          headerShown: false,
          tabBarLabelStyle: { color: styles.default.color },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="search-circle"
                size={24}
                color={styles.selected.color}
              />
            ) : (
              <AntDesign name="find" size={24} color={styles.default.color} />
            ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notification",
          headerShown: false,
          tabBarLabelStyle: { color: styles.default.color },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="notifications"
                size={24}
                color={styles.selected.color}
              />
            ) : (
              <Ionicons
                name="notifications-outline"
                size={24}
                color={styles.default.color}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarLabelStyle: { color: styles.default.color },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="person-circle"
                size={24}
                color={styles.selected.color}
              />
            ) : (
              <Ionicons
                name="person-circle-outline"
                size={24}
                color={styles.default.color}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Footer;

const styles = StyleSheet.create({
  default: {
    color: "#FFFFFF",
  },
  selected: {
    color: "#FFDE59",
  },
});
