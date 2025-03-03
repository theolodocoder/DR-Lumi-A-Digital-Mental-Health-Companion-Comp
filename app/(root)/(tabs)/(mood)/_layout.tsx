import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MoodLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="mood" options={{ headerShown: false }} />
      <Stack.Screen name="check-in" options={{ headerShown: false }} />
      <Stack.Screen name="journal" options={{ headerShown: false }} />
      <Stack.Screen name="history" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MoodLayout;
