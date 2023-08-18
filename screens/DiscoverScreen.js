import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../styles/global-styles";

const DiscoverScreen = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text>DiscoverScreen</Text>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {},
});
