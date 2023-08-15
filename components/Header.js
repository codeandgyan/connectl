import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";

const LogoImage = require("../assets/connectl-logo.png");

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={LogoImage} style={{ width: 44, height: 44 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181818",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 40,
  },
});
