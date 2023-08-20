import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import globalStyles from "../../styles/global-styles";

const CategoryItem = ({ src, categoryText, onCategorySelected }) => {
  const onSelectCategory = () => {
    console.log(categoryText);
    if (onCategorySelected) {
      onCategorySelected();
    }
  };
  return (
    <TouchableOpacity style={styles.categoryItem} onPress={onSelectCategory}>
      <View style={styles.imageContainer}>
        <Image
          source={src}
          style={{ height: 22, width: 22, tintColor: globalStyles.text.color }}
          resizeMode="contain"
        />
      </View>

      <Text style={[globalStyles.text, styles.categoryLabel]}>
        {categoryText}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  imageContainer: {},
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    marginHorizontal: 32,
  },
  categoryLabel: {
    fontSize: 18,
    fontWeight: 400,
    marginLeft: 8,
  },
});
