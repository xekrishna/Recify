import { Text, View } from "react-native";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";

import GlobalProvider from "../context/GlobalProvider";

SplashScreen.preventAutoHideAsync();

const RouteLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins/Poppins-Thin.ttf"),

    "Instrument-Medium": require("../assets/fonts/Instrument_Sans/InstrumentSans-Medium.ttf"),
    "Instrument-Regular": require("../assets/fonts/Instrument_Sans/InstrumentSans-Regular.ttf"),
    "Instrument-SemiBold": require("../assets/fonts/Instrument_Sans/InstrumentSans-SemiBold.ttf"),
    "Instrument-Bold": require("../assets/fonts/Instrument_Sans/InstrumentSans-Bold.ttf"),

    "Montserrat-Regular": require("../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),

    "Bebas-Medium": require("../assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf"),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  NavigationBar.setBackgroundColorAsync("#ffffff00");
  NavigationBar.setPositionAsync("absolute");

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
};

export default RouteLayout;
