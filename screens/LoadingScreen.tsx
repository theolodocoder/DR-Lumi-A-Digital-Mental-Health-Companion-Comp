import { Text, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  loadingText: string;
};

const LoadingScreen = ({ loadingText }: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-[#F7F4F2] justify-center items-center">
      <ActivityIndicator size="large" color="#9BB068" />
      <Text className="mt-4 text-lg font-UrbanistSemiBold text-[#4B3425]">
        {loadingText}
      </Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;
