import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const AcademicsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="impact" options={{ headerShown: false }} />
      <Stack.Screen name="grade-tracker" options={{ headerShown: false }} />
      <Stack.Screen
        name="performance-insights"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="study-tracker" options={{ headerShown: false }} />
      <Stack.Screen name="add-assignment" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AcademicsLayout;
