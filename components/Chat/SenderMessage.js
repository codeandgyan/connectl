import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../styles/global-styles";

const SenderMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.text]}>{message.message}</Text>
    </View>
  );
};

export default SenderMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#32a4e6",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 12,
    marginVertical: 8,
    alignSelf: "flex-start",
    marginLeft: "auto",
    borderBottomRightRadius: 0,
    maxWidth: "75%",
  },
});
