import {
  Pressable,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/global-styles";
import PostHeader from "../components/Post/PostHeader";
import HorizontalLine from "../components/Common/HorizontalLine";

const CreatePostScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[globalStyles.container, globalStyles.secondaryContainer]}
    >
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.navigate("Main")}>
            <Text style={[globalStyles.cancelText]}>Cancel</Text>
          </Pressable>
          <Text style={[globalStyles.text, styles.titleText]}>Create Post</Text>
          <Pressable
            style={styles.submitButton}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text style={[globalStyles.text, styles.submitLabel]}>Submit</Text>
          </Pressable>
        </View>
        <HorizontalLine color={"#36454F"} width={1} />
        <View style={[styles.postSubject]}>
          <PostHeader userid={1} />
        </View>
        <HorizontalLine color={"#36454F"} width={1} />
        <View
          style={{
            backgroundColor: "#585858",
            flex: 1,
          }}
        >
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            // onChangeText={(text) => onChangeText(text)}
            value={"This is a sample"}
            style={{}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    borderStyle: "solid",
    borderColor: "yellow",
    borderWidth: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 16,
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
  postSubject: {
    borderColor: "6f6f73",
  },
});
