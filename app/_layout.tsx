import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";

SplashScreen.preventAutoHideAsync();

type Props = {};

const RootLayout = (props: Props) => {
  const [fontsLoaded, error] = useFonts({
    "Ubuntu-Light": require("../assets/fonts/ubuntu-latin-300-normal.ttf"),
    "Ubuntu-Normal": require("../assets/fonts/ubuntu-latin-400-normal.ttf"),
    "Ubuntu-Medium": require("../assets/fonts/ubuntu-latin-500-normal.ttf"),
    "Ubuntu-Bold": require("../assets/fonts/ubuntu-latin-700-normal.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
