import {
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../styles/global-styles";
import PostHeader from "../components/Post/PostHeader";
import HorizontalLine from "../components/Common/HorizontalLine";
import { useNavigation } from "@react-navigation/native";
import TagInput from "../components/CreatePost/TagInput";

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [headLineValue, setHeadlineValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  return (
    <SafeAreaView
      style={[globalStyles.container, globalStyles.secondaryContainer]}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
          // keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0} // Adjust this value as needed
        >
          <View style={[styles.container]}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.cancelPress}
                onPress={() => navigation.navigate("Main")}
              >
                <Text style={[globalStyles.cancelText, styles.cancelText]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <Text style={[globalStyles.text, styles.titleText]}>
                Create Post
              </Text>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => navigation.navigate("Chat")}
              >
                <Text style={[globalStyles.text, styles.submitLabel]}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
            <HorizontalLine color={"#36454F"} width={1} />
            <View style={[styles.postSubject]}>
              <PostHeader userid={1} />
            </View>
            <HorizontalLine color={"#36454F"} width={1} />

            <View style={styles.textInput}>
              <TextInput
                editable
                maxLength={80}
                style={[globalStyles.text, styles.headlineText]}
                onChangeText={(text) => setHeadlineValue(text)}
                value={headLineValue}
                placeholder="Give your post a headline"
                placeholderTextColor={"#b3b3b6"}
                selectionColor={"#b3b3b6"}
                keyboardAppearance="dark"
              />
              <TextInput
                editable
                multiline
                numberOfLines={4}
                maxLength={80}
                style={[globalStyles.text, styles.descriptionText]}
                onChangeText={(text) => setDescriptionValue(text)}
                value={descriptionValue}
                placeholder="Write description..."
                placeholderTextColor={"#8f8f92"}
                selectionColor={"#8f8f92"}
                keyboardAppearance="dark"
              />
              <TagInput style={{ flex: 1 }} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
    // borderStyle: "solid",
    // borderColor: "yellow",
    // borderWidth: 5,
  },
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
  postSubject: {
    borderColor: "#6f6f73",
    padding: 12,
  },
  textInput: {
    backgroundColor: "#2f2f2f",
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  headlineText: {
    backgroundColor: "transparent",
    color: globalStyles.text.color,
    fontSize: 22,
    fontWeight: "bold",
    color: globalStyles.text.color,
  },
  descriptionText: {
    flex: 3,
    marginVertical: 8,
    backgroundColor: "transparent",
    color: "#b3b3b6",
    fontSize: 16,
    fontWeight: 400,
  },
});
