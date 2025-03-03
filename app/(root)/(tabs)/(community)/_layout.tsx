import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const CommunityLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="create-post" options={{ headerShown: false }} />
      <Stack.Screen name="post/:id" options={{ headerShown: false }} />
      <Stack.Screen name="notificatons" options={{ headerShown: false }} />
    </Stack>
  );
};

export default CommunityLayout;
