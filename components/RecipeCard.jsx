import React, { useState, useCallback } from "react";
import { View, Text, Image, FlatList } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { icons } from "../constants";

const CurrentItem = ({ isActive, post }) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.9);

  React.useEffect(() => {
    opacity.value = withTiming(isActive ? 1 : 0.5, { duration: 100 });
    scale.value = withTiming(isActive ? 1 : 0.9, { duration: 300 });
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      className="flex-col items-center px-2 shadow-lg relative w-max max-h-[30vh] overflow-hidden"
      style={[animatedStyle]}
    >
      <Image
        source={{ uri: post.thumbnail }}
        className="max-w-[330px] w-full max-h-[200px] h-full rounded-xl aspect-video"
      />
      <View
        className="flex-col w-[330px] absolute bottom-7 justify-between px-2 gap bg-[#6a6a6af2]
             max-w-[330px] h-[30%] rounded-b-xl"
      >
        <View className="flex-row gap-3 items-start justify-between pr-5">
          <View className="justify-between items-center flex-row flex-1 px-1">
            <View className="w-[45px] h-[45px] rounded-full border-2 border-primary justify-center items-center p-0.5">
              <Image
                source={{ uri: post.creator.avatar }}
                className="w-full h-full rounded-full"
              />
            </View>
            <View className="justify-center flex-1 ml-3 py-2">
              <Text
                className="font-psemibold text-sm text-neutral-100"
                numberOfLines={1}
              >
                {post.title}
              </Text>
              <Text className="font-pregular text-xs text-white">
                - {post.creator.username}
              </Text>
              <Text
                className="text-xs font-mregular text-white"
                numberOfLines={1}
              >
                {post.description}
              </Text>
            </View>
          </View>
          <View className="pt-1">
            <Image
              source={icons.menu}
              className="w-5 h-5"
              resizeMode="contain"
              tintColor="#ffffff"
            />
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

const RecipeCard = ({ post }) => {
  const [viewableItems, setViewableItems] = useState(new Set());

  const viewableItemsChanged = useCallback(({ viewableItems }) => {
    const viewableItemIds = new Set(viewableItems.map((item) => item.item.$id));
    setViewableItems(viewableItemIds);
  }, []);

  return (
    <FlatList
      data={post}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <CurrentItem isActive={viewableItems.has(item.$id)} post={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

export default RecipeCard;
