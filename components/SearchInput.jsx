import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SeachInput = ({
  title,
  value,
  placeholder,
  fav,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  return (
    <View
      className={`w-full h-12 px-4 bg-neutral-100 rounded-full border-[2px] border-transparent focus:border-secondary items-center flex-row space-x-4`}
    >
      <TextInput
        className="text-base font-pregular mt-0.5 text-black-100 flex-1"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7B7B7B"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="h-5 w-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SeachInput;
