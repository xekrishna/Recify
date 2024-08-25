import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  fav,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  let selectedIcon;
  switch (fav) {
    case "envelope":
      selectedIcon = icons.envelope;
      break;
    case "lock":
      selectedIcon = icons.lock;
      break;
    case "user":
      selectedIcon = icons.user;
      break;
  }
  return (
    <View className={`${otherStyles}`}>
      <View
        className={`w-full h-16 px-4 bg-neutral-100 rounded-full border-[2px] border-transparent focus:border-secondary items-center flex-row`}
      >
        <Image source={selectedIcon} className="h-5 w-5 mr-2" />
        <TextInput
          className="flex-1 flex font-pregular text-base items-center"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B7B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
