import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../components/CustomButton";
import { images } from "../constants";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) {
    return <Redirect href="/home" />;
  }

  return (
    <SafeAreaView className="bg-secondary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Image
          source={images.bg}
          className="w-[100vw] h-[100vh] -z-1 absolute"
          resizeMethod="contain"
        />
        <View className="w-full justify-center items-center min-h-[100vh] px-4">
          <Text className="text-5xl font-msemibold uppercase text-primary">
            Recify
          </Text>
          <Text className="text-primary text-xs font-plight">
            Best Recipes Around The World
          </Text>
          <CustomButton
            title="Join Now"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-[60vw] mt-5"
          />
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
