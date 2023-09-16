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
import SelectCategoryModal from "../components/CreatePost/SelectCategoryModal";
import { useNavigation } from "@react-navigation/native";
import { useAddPostData } from "../hooks/usePostsData";
import uuid from "react-native-uuid";
import { getCurrentEpochTime } from "../helpers/timeUtil";
import useAuth from "../hooks/useAuth";

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [showCategoryOptions, setShowCategoryOptions] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Select a category");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [postHeadline, setPostHeadline] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [tags, setTags] = useState([]);
  const { mutate: submitPost } = useAddPostData();
  const { user } = useAuth();

  const openCategorySelection = () => {
    Keyboard.dismiss();
    setShowCategoryOptions(true);
  };

  const closeCategorySelection = () => {
    Keyboard.dismiss();
    setShowCategoryOptions(false);
  };

  const categorySelected = (selectedCat, selectedCatId) => {
    console.log("selectedCategory ===>", selectedCat);
    if (selectedCat) {
      setSelectedCategory(selectedCat);
    }
    if (selectedCatId) {
      setSelectedCategoryId(selectedCatId);
    }
    closeCategorySelection();
  };

  const handleHeadline = (headline) => {
    setPostHeadline(headline);
  };

  const handleDescription = (desc) => {
    setPostDescription(desc);
  };

  const handleTags = (tags) => {
    setTags(tags);
  };

  const onSubmitPost = () => {
    if (!selectedCategoryId || !postHeadline || !postDescription) {
      return; //TODO: Error
    }
    const postId = uuid.v4();
    const post = {
      id: postId,
      userId: user?.userid,
      catid: selectedCategoryId,
      title: postHeadline,
      body: postDescription,
      tags: tags,
      time: getCurrentEpochTime(),
    };

    submitPost(post);
    navigation.navigate("Main");
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
              <CreatePostScreenHeader onSubmitPost={() => onSubmitPost()} />
              <HorizontalLine color={"#36454F"} width={1} />
              <View style={[styles.postSubject]}>
                <CreatePostUserDetail
                  userid={user?.userid}
                  selectACategory={openCategorySelection}
                  selectedCategory={selectedCategory}
                />
              </View>
              <HorizontalLine color={"#36454F"} width={1} />
              <PostTextInput
                onUpdateHeadline={handleHeadline}
                onUpdateDescription={handleDescription}
                onTagListUpdated={handleTags}
              />
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
  },
  postSubject: {
    borderColor: "#6f6f73",
    padding: 12,
  },
});
