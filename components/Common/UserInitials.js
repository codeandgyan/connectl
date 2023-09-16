import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../styles/global-styles";
import initials from "initials";

const UserInitials = ({ username }) => {
  return (
    <View style={styles.profileContainer}>
      <Text style={[globalStyles.text, styles.profileLabel]}>
        {initials(username)}
      </Text>
    </View>
  );
};

export default UserInitials;

const styles = StyleSheet.create({
  profileContainer: {
    borderColor: "#FFFFFF",
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 1,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
  profileLabel: {
    fontSize: 14,
    fontWeight: 400,
  },
});
