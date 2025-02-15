import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type Props = {};

const AuthLayout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
