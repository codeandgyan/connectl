import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../styles/global-styles";
import HorizontalLine from "../components/Common/HorizontalLine";
import PostTextInput from "../components/CreatePost/PostTextInput";
import CreatePostScreenHeader from "../components/CreatePost/CreatePostScreenHeader";
import CreatePostUserDetail from "../components/CreatePost/CreatePostUserDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectCategoryModal from "../components/CreatePost/SelectCategoryModal";

const CreatePostScreen = () => {
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select a category");

  const Stack = createNativeStackNavigator();

  const toggleSelectACategory = (selectedCategory) => {
    Keyboard.dismiss();
    setSelectedCategory(selectedCategory);
    setShowCategoryOptions(!showCategoryOptions);
  };

  const openCategorySelection = () => {
    Keyboard.dismiss();
    setShowCategoryOptions(true);
  };

  const closeCategorySelection = () => {
    Keyboard.dismiss();
    setShowCategoryOptions(false);
  };

  const categorySelected = (selectedCategory) => {
    console.log("selectedCategory ===>", selectedCategory);
    if (selectedCategory) {
      setSelectedCategory(selectedCategory);
    }
    closeCategorySelection();
  };

  return (
    <>
      <SafeAreaView
        style={[globalStyles.container, globalStyles.secondaryContainer]}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : null}
            // keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0} // Adjust this value as needed
          >
            <View style={[styles.container]}>
              <CreatePostScreenHeader />
              <HorizontalLine color={"#36454F"} width={1} />
              <View style={[styles.postSubject]}>
                <CreatePostUserDetail
                  userid={1} //TODO: Remove hardcoding
                  selectACategory={openCategorySelection}
                  selectedCategory={selectedCategory}
                />
              </View>
              <HorizontalLine color={"#36454F"} width={1} />
              <PostTextInput />
            </View>
            <SelectCategoryModal
              isVisible={showCategoryOptions}
              onClose={closeCategorySelection}
              onSelectCategory={categorySelected}
            />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
    // borderStyle: "solid",
    // borderColor: "yellow",
    // borderWidth: 5,
  },
  postSubject: {
    borderColor: "#6f6f73",
    padding: 12,
  },
});
