import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../styles/global-styles";

const CreatePostScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.cancelPress}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={[globalStyles.cancelText, styles.cancelText]}>Cancel</Text>
      </TouchableOpacity>
      <Text style={[globalStyles.text, styles.titleText]}>Create Post</Text>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={[globalStyles.text, styles.submitLabel]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostScreenHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  cancelPress: {
    alignSelf: "flex-end",
  },
  cancelText: {
    paddingVertical: 4,
    fontSize: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 600,
  },
  submitButton: {
    backgroundColor: "#5271FF",
    borderStyle: "solid",
    borderRadius: 20,
    width: 80,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submitLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "#FFDE59",
  },
});
