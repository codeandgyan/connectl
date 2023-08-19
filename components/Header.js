import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import globalStyles from "../styles/global-styles";
import HorizontalLine from "./Common/HorizontalLine";

const LogoImage = require("../assets/connectl-logo-draft2.png");

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={LogoImage} style={styles.logo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.secondaryContainer.backgroundColor,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 8,
    borderBottomColor: globalStyles.container.backgroundColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logo: { width: 44, height: 44, resizeMode: "contain" },
});
