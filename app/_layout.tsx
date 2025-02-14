import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import "../globals.css";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Urbanist-Bold": require("@/assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-SemiBold": require("@/assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Medium": require("@/assets/fonts/Urbanist-Medium.ttf"),
    Urbanist: require("@/assets/fonts/Urbanist-Regular.ttf"),
  });

  useEffect(() => {
    if (!loaded) {
      return;
    }
    SplashScreen.hideAsync();
  }, [loaded]);

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
