import { View, Text, StyleSheet } from "react-native";
import React from "react";
import globalStyles, {
  getRandomBackgroundColor,
} from "../../styles/global-styles";

const Tag = ({ tagValue, children, style }) => {
  return (
    <View style={[styles.tag, { backgroundColor: getRandomBackgroundColor() }]}>
      <Text style={[globalStyles.text, styles.tagText, style]}>{tagValue}</Text>
      {children && children}
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    borderRadius: 3,
    margin: 2,
  },
  tagText: {
    fontSize: 11,
    padding: 3,
  },
});
