import {
  FlatList,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/global-styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import Header from "../components/Header";
import PostBody from "../components/Post/PostBody";
import ChatDoodle from "../assets/chat-doodle-style1.jpg";
import HorizontalLine from "../components/Common/HorizontalLine";
import useAuth from "../hooks/useAuth";
import SenderMessage from "../components/Chat/SenderMessage";
import ReceiverMessage from "../components/Chat/ReceiverMessage";
import PostBodyMessage from "../components/Chat/PostBodyMessage";
import { useQueryClient } from "react-query";
import { getUsersData } from "../hooks/useUsersData";
import UserInitials from "../components/Common/UserInitials";

const ChatScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { postBody, postUserId } = params;
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    // { id: "n", userId: 1, message: "14. Spam" },
    // { id: "m", userId: 1, message: "13. Spam" },
    // { id: "l", userId: 1, message: "12. Spam" },
    // { id: "k", userId: 1, message: "11. Spam" },
    // { id: "j", userId: 1, message: "10. Spam" },
    // { id: "i", userId: 1, message: "9. Spam" },
    // { id: "h", userId: 1, message: "8. Spam" },
    // { id: "g", userId: 2, message: "7. Spam" },
    // { id: "f", userId: 2, message: "6. Spam" },
    // { id: "e", userId: 2, message: "5. Spam" },
    // { id: "d", userId: 2, message: "4. Spam" },
    // { id: "c", userId: 1, message: "3. Hi There" },
    // { id: "b", userId: 2, message: "2. Hello" },
    {
      id: "a",
      userId: 2,
      postBody: postBody,
    },
  ]); //TODO: Fetch messages from DB.
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const users = getUsersData(queryClient.getQueryData("users"));
  const postUser = users?.find((user) => user?.id === postUserId);
  console.log(postUser);

  const sendMessage = () => {};
  return (
    <SafeAreaView
      style={[globalStyles.container, globalStyles.secondaryContainer]}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backIconContainer}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={36} color="#38B6FF" />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", gap: 6 }}>
            <UserInitials username={postUser?.name} />
            <Text
              style={[
                globalStyles.text,
                { alignSelf: "center", fontWeight: "700" },
              ]}
            >
              {postUser?.name}
            </Text>
          </View>
        </View>
        {/* <View style={[styles.postSubject]}>
          <PostBody
            headline={postBody?.headline}
            description={postBody?.description}
            tags={postBody?.tags}
          />
        </View> */}
        <HorizontalLine color={globalStyles.container.backgroundColor} />
        <ImageBackground
          source={ChatDoodle}
          resizeMode="cover"
          style={styles.messageBodyBackgroundImage}
        >
          <FlatList
            data={messages}
            style={styles.messageBody}
            inverted={-1}
            keyExtractor={(item) => item?.id}
            scrollEnabled={true}
            renderItem={({ item: message }) => {
              if (message.postBody) {
                return (
                  <PostBodyMessage
                    postBody={message?.postBody}
                    postUser={postUser}
                    key={message.id}
                  />
                );
              }
              if (message.userId === user.userid) {
                return <SenderMessage key={message?.id} message={message} />;
              }
              return <ReceiverMessage key={message?.id} message={message} />;
            }}
          />
        </ImageBackground>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // Adjust this value as needed
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={[styles.inputMessageContainer]}>
              <TextInput
                style={[
                  globalStyles.text,
                  globalStyles.textInputBackground,
                  styles.inputMessageText,
                ]}
                value={inputMessage}
                placeholder={"Send message..."}
                placeholderTextColor={"#727275"}
                onChangeText={(text) => setInputMessage(text)}
                onSubmitEditing={() => sendMessage()}
                keyboardAppearance="dark"
              />
              <TouchableOpacity
                disabled={!inputMessage}
                style={styles.sendContainer}
                onPress={() => sendMessage()}
              >
                <Ionicons name="md-send" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    flex: 1,
  },
  headerContainer: {
    backgroundColor: globalStyles.secondaryContainer.backgroundColor,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 12,
    paddingBottom: 4,
    borderBottomColor: globalStyles.container.backgroundColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 12,
  },
  backIconContainer: {
    // padding: 4,
  },
  logo: { width: 44, height: 44, resizeMode: "contain" },
  postSubject: {
    paddingBottom: 8,
  },
  messageBody: {
    flex: 1,
  },
  messageBodyBackgroundImage: {
    flex: 1,
    // borderColor: "yellow",
    // borderWidth: 3,
  },
  inputMessageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: globalStyles.secondaryContainer.backgroundColor,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  inputMessageText: {
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 20,
    fontSize: 18,
    fontWeight: "normal",
    width: "85%",
    height: 36,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  sendContainer: {
    borderRadius: 50,
    backgroundColor: "#32a4e6", //"#38B6FF",
    padding: 8,
  },
});
