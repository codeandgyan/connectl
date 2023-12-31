import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HorizontalLine = ({ color, width }) => {
  return (
    <View
      style={[
        {
          borderBottomColor: color,
          borderBottomWidth: width ?? StyleSheet.hairlineWidth,
        },
      ]}
    />
  );
};

export default HorizontalLine;
