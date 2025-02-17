import { Stack } from "expo-router";
import React from "react";

const OnboardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="mood" options={{ headerShown: false }} />
      <Stack.Screen name="medications" options={{ headerShown: false }} />
      <Stack.Screen name="physical-symptoms" options={{ headerShown: false }} />
      <Stack.Screen name="expressions" options={{ headerShown: false }} />
      <Stack.Screen name="sleep-quality" options={{ headerShown: false }} />
      <Stack.Screen name="stress-level" options={{ headerShown: false }} />
      <Stack.Screen name="professional-help" options={{ headerShown: false }} />
      <Stack.Screen name="complete" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OnboardingLayout;
