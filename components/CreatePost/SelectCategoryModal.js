import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../styles/global-styles";
import ReactNativeModal from "react-native-modal";
import CategoryItem from "./CategoryItem";

import SoftwareEnggImg from "../../assets/categories/software-engineering.png";
import EnglishSpeakingImg from "../../assets/categories/english-speaking.png";
import FreelancingImg from "../../assets/categories/freelancing.png";
import CounselingImg from "../../assets/categories/counseling.png";
import CareerGuidanceImg from "../../assets/categories/career-guidance.png";
import HobbyImg from "../../assets/categories/hobby.png";
import TravelingImg from "../../assets/categories/traveling.png";
import MiscellaneousImg from "../../assets/categories/miscellaneous.png";

const SelectCategoryModal = ({ isVisible, toggleSelectACategory }) => {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      backdropOpacity={0.4}
      backdropColor="gray"
      onBackdropPress={toggleSelectACategory}
      style={{ margin: 0 }}
      coverScreen={true}
      swipeDirection={["down"]}
    >
      <View style={styles.container}>
        <View styles={styles.content}>
          <View style={styles.handleBar} />
          <Text style={[globalStyles.text, styles.title]}>
            {"Select a category"}
          </Text>
          <CategoryItem
            src={SoftwareEnggImg}
            categoryText={"Software Engineering"}
            onCategorySelected={toggleSelectACategory}
          />
          <CategoryItem
            src={EnglishSpeakingImg}
            categoryText={"English Speaking"}
            onCategorySelected={toggleSelectACategory}
          />
          <CategoryItem
            src={FreelancingImg}
            categoryText={"Freelancing"}
            onCategorySelected={toggleSelectACategory}
          />
          <CategoryItem
            src={CounselingImg}
            categoryText={"Counseling"}
            onCategorySelected={toggleSelectACategory}
          />
          <CategoryItem
            src={CareerGuidanceImg}
            categoryText={"Career Guidance"}
            onCategorySelected={toggleSelectACategory}
          />
          <CategoryItem
            src={HobbyImg}
            categoryText={"Hobby"}
            onCategorySelected={toggleSelectACategory}
          />
          <CategoryItem
            src={TravelingImg}
            categoryText={"Traveling"}
            onCategorySelected={toggleSelectACategory}
          />
          <CategoryItem
            src={MiscellaneousImg}
            categoryText={"Miscellaneous"}
            onCategorySelected={toggleSelectACategory}
          />
        </View>
        {/* <Text style={globalStyles.text}>This is a category options modal</Text>

        <TouchableOpacity onPress={toggleSelectACategory}>
          <Text style={globalStyles.link}>Close</Text>
        </TouchableOpacity> */}
      </View>
    </ReactNativeModal>
  );
};

export default SelectCategoryModal;

const styles = StyleSheet.create({
  container: {
    flex: 0.54,
    backgroundColor: globalStyles.secondaryContainer.backgroundColor,
    marginTop: "auto",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  content: {
    flex: 1,
  },
  handleBar: {
    backgroundColor: "#474747",
    width: 32,
    height: 5,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 5,
  },
  title: {
    marginTop: 6,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: 600,
    alignSelf: "center",
  },
});
