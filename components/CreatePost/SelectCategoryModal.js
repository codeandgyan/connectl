import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
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

const categories = [
  { categoryid: "cat1", category: "Software Engineering", image: SoftwareEnggImg },
  { categoryid: "cat2", category: "Career Guidance", image: CareerGuidanceImg },
  { categoryid: "cat3", category: "Freelancing", image: FreelancingImg },
  { categoryid: "cat4", category: "English Speaking", image: EnglishSpeakingImg },
  { categoryid: "cat5", category: "Hobby", image: HobbyImg },
  { categoryid: "cat6", category: "Traveling", image: TravelingImg },
  { categoryid: "cat7", category: "Counseling", image: CounselingImg },
  { categoryid: "cat8", category: "Miscellaneous", image: MiscellaneousImg },
];

const SelectCategoryModal = ({ isVisible, onClose, onSelectCategory }) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const handleSelectCategory = (category) => {
    setCurrentCategory(category);
    onSelectCategory && onSelectCategory(category);
  };

  const handleCloseModal = () => {
    onClose && onClose();
  };

  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      backdropOpacity={0.4}
      backdropColor="gray"
      onBackdropPress={handleCloseModal}
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

          {categories.map((item) => {
            return (
              <CategoryItem
                src={item.image}
                categoryText={item.category}
                onCategorySelected={handleSelectCategory}
                isSelected={item.category === currentCategory}
                key={item.categoryid}
              />
            );
          })}

          {/* <CategoryItem
            src={SoftwareEnggImg}
            categoryText={"Software Engineering"}
            onCategorySelected={handleSelectCategory}
            isSelected={true}
          />
          <CategoryItem
            src={EnglishSpeakingImg}
            categoryText={"English Speaking"}
            onCategorySelected={handleSelectCategory}
          />
          <CategoryItem
            src={FreelancingImg}
            categoryText={"Freelancing"}
            onCategorySelected={handleSelectCategory}
          />
          <CategoryItem
            src={CounselingImg}
            categoryText={"Counseling"}
            onCategorySelected={handleSelectCategory}
          />
          <CategoryItem
            src={CareerGuidanceImg}
            categoryText={"Career Guidance"}
            onCategorySelected={handleSelectCategory}
          />
          <CategoryItem
            src={HobbyImg}
            categoryText={"Hobby"}
            onCategorySelected={handleSelectCategory}
          />
          <CategoryItem
            src={TravelingImg}
            categoryText={"Traveling"}
            onCategorySelected={handleSelectCategory}
          />
          <CategoryItem
            src={MiscellaneousImg}
            categoryText={"Miscellaneous"}
            onCategorySelected={handleSelectCategory}
          /> */}
        </View>
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
