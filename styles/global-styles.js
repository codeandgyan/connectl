import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "#4B4B50",
    flex: 1,
  },
  secondaryContainer: {
    backgroundColor: "#181818",
  },
  screenContainer: {
    paddingTop: 40,
  },
  text: {
    color: "#FFFFFF",
  },
  link: {
    color: "#0000EE",
    fontSize: 16,
  },
  cancelText: {
    color: "#d74c4c",
  },
});

export const getRandomBackgroundColor = () => {
  const screenBgColor = globalStyles.secondaryContainer.backgroundColor; // Screen background color
  const contrastThreshold = 1.8; // Minimum contrast ratio for readability
  
  function getContrastRatio(color1, color2) {
      const getColorValue = color => {
          const normalizedColor = color.slice(1); // Remove the '#' character
          const r = parseInt(normalizedColor.substr(0, 2), 16);
          const g = parseInt(normalizedColor.substr(2, 2), 16);
          const b = parseInt(normalizedColor.substr(4, 2), 16);
          return (r * 299 + g * 587 + b * 114) / 1000;
      };
      
      const l1 = getColorValue(color1);
      const l2 = getColorValue(color2);
      
      return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }
  
  let randomColor = "";
  let contrastRatio = 0;
  
  do {
      randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate a random color
      contrastRatio = getContrastRatio(screenBgColor, randomColor);
  } while (contrastRatio < contrastThreshold);
  
  return randomColor;
}

export default globalStyles;
