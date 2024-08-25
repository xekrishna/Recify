import { View, Text, Image } from "react-native";
import { images } from "../constants";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.nothing}
        className="w-40 h-40"
        resizeMode="contain"
      />
      <Text className="font-isemibold text-lg">{title}</Text>
      <Text className="font-iregular text-sm">{subtitle}</Text>
    </View>
  );
};

export default EmptyState;
