import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles/global-styles";

const MountainClimbImg = require("../assets/mountain_climb.png");

const LoginScreen = () => {
  useEffect(() => {});
  return (
    <SafeAreaView style={[globalStyles.secondaryContainer, styles.container]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
          // keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0} // Adjust this value as needed
        >
          <View style={styles.header}>
            <Image source={MountainClimbImg} style={styles.image} />

            <View style={styles.content}>
              <Text style={[globalStyles.text, styles.title]}>
                Sign In to CodeFriends
              </Text>
              <TextInput
                editable
                maxLength={80}
                style={[globalStyles.text, styles.usernameText]}
                // onChangeText={(text) => onChangeHeadline(text)}
                // value={headLineValue}
                placeholder="Enter email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                placeholderTextColor={"#b3b3b6"}
                keyboardAppearance="dark"
              />
              <TextInput
                editable
                maxLength={80}
                style={[globalStyles.text, styles.usernameText]}
                // onChangeText={(text) => onChangeHeadline(text)}
                // value={headLineValue}
                placeholder="Enter Password"
                placeholderTextColor={"#b3b3b6"}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                keyboardAppearance="dark"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 250,
    width: "100%",
    objectFit: "contain",
  },
  header: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
  },
  content: { gap: 20 },
  usernameText: {
    borderWidth: 2,
    borderColor: "#b3b3b6",
    borderRadius: 10,
    fontSize: 18,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
