import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import TagInput from "./TagInput";
import globalStyles from "../../styles/global-styles";

const PostTextInput = () => {
  const [headLineValue, setHeadlineValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  return (
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
  );
};

export default PostTextInput;

const styles = StyleSheet.create({
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
