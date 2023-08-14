import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";

export default function App() {
  return (
    <>
      <Navigation />
    </>
    // <View style={styles.container}>
    //   <Text style={styles.text}>Let's develop connectl</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#4B4B50",
    alignItems: "center",
    justifyContent: "center",
  },
});
