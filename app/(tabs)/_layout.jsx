import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Animatable from "react-native-animatable";

import { icons } from "../../constants/";

import Home from "./home";
import Saved from "./saved";
import Profile from "./profile";

const Tab = createBottomTabNavigator();

const iconIn = {
  0: { translateY: 0, opacity: 1 },
  1: { translateY: -60, opacity: 0 },
};
const iconOut = {
  0: { translateY: -60, opacity: 0 },
  1: { translateY: 0, opacity: 1 },
};

const textIn = {
  0: { translateY: 30, opacity: 0 },
  1: { translateY: 0, opacity: 1 },
};

const textOut = {
  0: { translateY: 1, opacity: 1 },
  1: { translateY: 0, opacity: 0 },
};

const TabRoutes = [
  {
    name: "saved",
    title: "Saved",
    component: Saved,
  },
  {
    name: "home",
    title: "Home",
    component: Home,
  },
  {
    name: "profile",
    title: "Profile",
    component: Profile,
  },
];

const TabIcon = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      iconRef.current.animate(iconIn);
      textRef.current.animate(textIn);
    } else {
      iconRef.current.animate(iconOut);
      textRef.current.animate(textOut);
    }
  }, [focused]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Animatable.View className="items-center justify-center relative w-[70px] h-full">
        <Animatable.Image
          source={icons[item.name]}
          ref={iconRef}
          duration={200}
          resizeMode="contain"
          tintColor="#aaa"
          className=" w-full absolute"
          style={{ width: 24, height: 24 }}
        />

        <Animatable.Text
          ref={textRef}
          duration={200}
          className="font-pbold text-[15px] text-secondary shadow-md border-b-2 border-b-secondary absolute"
        >
          {item.title}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            borderRadius: 100,
            width: 260,
            left: "50%",
            paddingTop: 15,
            transform: [{ translateX: -130 }],
            marginBottom: 30,
            paddingHorizontal: 20,
            overflow: "hidden",
            backgroundColor: "white",
            position: "absolute",
          },
        }}
      >
        {TabRoutes.map((item, index) => (
          <Tab.Screen
            name={item.name}
            component={item.component}
            options={{
              tabBarShowLabel: false,

              tabBarButton: (props) => <TabIcon {...props} item={item} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};

export default TabsLayout;
