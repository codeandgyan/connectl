import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../../styles/global-styles";
import { useNavigation } from "@react-navigation/native";

const PostFooter = ({ numberOfLikes, numberOfConnections, postBody, postUserId }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <View style={styles.statsBox}>
        <AntDesign name="hearto" size={24} color={styles.statsLabel.color} />
        <Text style={[globalStyles.text, styles.statsLabel]}>
          {numberOfLikes}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate("Chat", { postBody, postUserId })}
      >
        <Text style={[globalStyles.text, styles.chatLabel]}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },
  statsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: 42,
  },
  statsLabel: {
    fontSize: 13,
    fontWeight: 500,
    color: "#939396",
  },
  chatButton: {
    // backgroundColor: "#3c3c40",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#6f6f73",
    borderRadius: 15,
    width: 102,
    padding: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  chatLabel: {
    fontSize: 16,
    fontWeight: 500,
    color: "#FFDE59",
  },
});
