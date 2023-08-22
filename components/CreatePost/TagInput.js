import { TouchableOpacity, StyleSheet, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import Tag from "../Post/Tag";
import globalStyles from "../../styles/global-styles";

const TagInput = ({ style }) => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [placeholder, setPlaceHolder] = useState(
    "Add tags separated by commas(,)"
  );

  const handleTagInput = (text) => {
    setTagInput(text);

    if (text.endsWith(",")) {
      const newTag = text.slice(0, -1).trim(); // Remove the comma and trim spaces
      if (newTag) {
        setTags([...tags, newTag]);
        setTagInput("");
        setPlaceHolder("Add tags");
      }
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    if (updatedTags.length === 0) {
      setPlaceHolder("Add tags separated by commas");
    }
  };

  return (
    <View style={[styles.container, style]}>
      {tags.map((tag) => {
        return (
          <Tag tagValue={tag} key={tag} style={{ fontSize: 16 }}>
            <TouchableOpacity
              style={styles.closeTag}
              onPress={() => {
                handleRemoveTag(tag);
              }}
            >
              <AntDesign name="close" size={20} color={"#FFFFFF"} />
            </TouchableOpacity>
          </Tag>
        );
      })}

      <TextInput
        editable
        multiline
        numberOfLines={2}
        maxLength={20}
        style={[globalStyles.text, styles.tagInputText]}
        value={tagInput}
        onChangeText={handleTagInput}
        placeholder={placeholder}
        placeholderTextColor={"#808080"}
        selectionColor={"#808080"}
        keyboardAppearance="dark"
      />
    </View>
  );
};

export default TagInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tagInputText: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 4,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
    marginRight: 40,
  },
  closeTag: {
    marginHorizontal: 3,
  },
});
