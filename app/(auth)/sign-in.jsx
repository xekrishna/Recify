import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import { icons } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }
    setSubmitting(true);
    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className={` h-full bg-neutral-200`}>
      <View className="mt-5 justify-between h-[5vh] flex-row px-5">
        <Link href="/" asChild>
          <TouchableOpacity>
            <Image
              source={icons.leftArrow}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Link>

        <Text className="text-neutral-600 font-pregular">
          Forgot your password?
        </Text>
      </View>
      <View className={`p-5 min-h-[95vh] bg-primary rounded-3xl`}>
        <Text className={`text-2xl font-isemibold pt-5`}>Let's Cook More</Text>
        <Text className={`text-zinc-500 font-iregular`}>
          Glad to see you back
        </Text>
        <FormField
          title="Email"
          placeholder="Email"
          value={form.email}
          fav="envelope"
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7 "
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          placeholder="Password"
          value={form.password}
          fav="lock"
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
        />

        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />
        <View className="justify-center items-center mt-5">
          <Text className={`font-pregular`}>
            Don't have account?{" "}
            <Link href="/sign-up" className="text-secondary">
              Sign Up
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
