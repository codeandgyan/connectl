import { View, Text, StyleSheet } from "react-native";
import React from "react";
import globalStyles, { getRandomBackgroundColor } from "../../styles/global-styles";

const Tag = ({ tagValue }) => {
  return (
    <View style={[styles.tag, { backgroundColor: getRandomBackgroundColor() }]}>
      <Text style={[globalStyles.text, styles.tagText]}>{tagValue}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    alignSelf: "flex-start",
    borderRadius: 3,
    margin: 2,
  },
  tagText: {
    fontSize: 11,
    padding: 3,
  },
});
