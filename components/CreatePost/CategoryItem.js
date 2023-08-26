import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import globalStyles from "../../styles/global-styles";

const CategoryItem = ({
  src,
  categoryText,
  onCategorySelected,
  isSelected,
}) => {
  const onSelectCategory = () => {
    if (onCategorySelected) {
      onCategorySelected(categoryText);
    }
  };
  return (
    <TouchableOpacity style={[styles.container]} onPress={onSelectCategory}>
      <View
        style={[styles.categoryItem, isSelected ? styles.selectedCategory : {}]}
      >
        <Image
          source={src}
          style={{ height: 22, width: 22, tintColor: globalStyles.text.color }}
          resizeMode="contain"
        />
        <Text style={[globalStyles.text, styles.categoryLabel]}>
          {categoryText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {},
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    marginHorizontal: 32,
    paddingLeft: 4,
  },
  categoryLabel: {
    fontSize: 18,
    fontWeight: 400,
    marginLeft: 8,
  },
  selectedCategory: {
    backgroundColor: "#164966",
    paddingVertical: 6,
    borderRadius: 8,
  },
});
