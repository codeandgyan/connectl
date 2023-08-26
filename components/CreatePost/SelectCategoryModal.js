import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import globalStyles from "../../styles/global-styles";
import ReactNativeModal from "react-native-modal";
import CategoryItem from "./CategoryItem";
import { categories } from "../Common/CategoryList";

const SelectCategoryModal = ({ isVisible, onClose, onSelectCategory }) => {
  const [currentCategoryId, setCurrentCategoryId] = useState("");
  const handleSelectCategory = (category, categoryId) => {
    setCurrentCategoryId(categoryId);
    onSelectCategory && onSelectCategory(category, categoryId);
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
                categoryId={item.categoryid}
                isSelected={item.categoryid === currentCategoryId}
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
