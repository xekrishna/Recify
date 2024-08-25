import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } bg-orange-400 rounded-full min-h-[62px] justify-center items-center`}
      disabled={isLoading}
    >
      <Text className={`text-primary text-lg font-psemibold`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
