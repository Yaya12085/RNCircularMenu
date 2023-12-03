import { Dimensions } from "react-native";

export const calculatePosition = (index, totalItems) => {
  const { width, height } = Dimensions.get("window");
  const radius = Math.min(width, height) / 3;
  const angle = (index * 360) / totalItems;
  const radians = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);

  return {
    transform: [{ translateX: x }, { translateY: y }],
  };
};
