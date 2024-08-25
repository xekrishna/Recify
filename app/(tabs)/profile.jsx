import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { icons, images } from "../../constants";

const Profile = () => {
  const [extended, setExtended] = useState(false);

  const toggleViewMore = () => {
    setExtended(!extended);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-4 gap-1">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-psemibold">sanzu</Text>
            <View className="flex-row items-center gap-2">
              <Image
                source={icons.plus}
                className=" w-6 h-6"
                resizeMode="contain"
              />
              <Image
                source={icons.list}
                className="w-9 h-9"
                resizeMode="contain"
              />
            </View>
          </View>
          <View className="flex-row items-start pt-4">
            <View className="w-[100px] border-[3px] border-neutral-600 h-[100px] rounded-full items-center justify-center ">
              <Image
                source={images.avatar}
                className="w-[90px] h-[90px] rounded-full"
                resizeMode="cover"
              />
            </View>
            <View className="flex-1 h-[100px] ml-4">
              <View className="justify-center h-full items-start">
                <Text>
                  Recipes Shared : <Text>5</Text>
                </Text>
                <Text>
                  Followers : <Text>0</Text>
                </Text>
                <Text>
                  Following : <Text>0</Text>
                </Text>
              </View>
            </View>
          </View>
          <View className="">
            <Text className="text-xl font-psemibold " numberOfLines={1}>
              Krishna
            </Text>
            <Text
              className="text-xs font-pmedium flex-shrink"
              numberOfLines={extended ? undefined : 3}
            >
              Methionylthreonylthreonylglutaminylarginylisoleucineglutamylvalylglutaminylvalylglutaminylglutamylglutaminylvalylglutamylglutaminylvalylglutaminylvalylglutaminylisoleucineglutaminylvalylglutamylglutaminylvalylglutaminylisoleucineglutamylvalylisoleucine
            </Text>
            <TouchableOpacity onPress={toggleViewMore}>
              <Text className="text-xs font-pmedium">
                {extended ? "| View Less" : "..View More"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
