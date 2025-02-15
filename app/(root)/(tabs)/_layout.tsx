import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const TabsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TabsLayout;
