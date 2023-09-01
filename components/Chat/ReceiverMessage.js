import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../styles/global-styles";

const ReceiverMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.text}>{message.message}</Text>
    </View>
  );
};

export default ReceiverMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#484849",
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 8,
    alignSelf: "flex-start",
    marginRight: "auto",
    borderBottomLeftRadius: 0,
    maxWidth: "75%",
  },
});
