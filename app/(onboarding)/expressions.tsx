// app/(auth)/onboarding/expression.tsx
import CompilationLoader from "@/screens/CompilationLoader";
import { useOnboardingStore } from "@/stores/onboarding";
import { analyzeSentiment } from "@/utils/sentiment";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ContinueButton from "./_lib/components/ContinueButton";
import Header from "./_lib/components/Header";
import ProgressHeader from "./_lib/components/ProgressHeader";

const ExpressionScreen = () => {
  const { expression, setExpression, calculateAndSetHealthScore } =
    useOnboardingStore();
  const [showComplScreen, setShowComplScreen] = useState(false);

  const handleNext = () => {
    if (expression) {
      calculateAndSetHealthScore();
      setShowComplScreen(true);

      setTimeout(() => {
        router.push("/(onboarding)/complete"); // Navigate to the next screen
      }, 2000);
    }
  };

  const handleBack = () => {
    router.back(); // Go back to the previous screen
  };

  if (showComplScreen) {
    return <CompilationLoader />;
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Progress Indicator */}
      <ProgressHeader currentStep={7} onBack={handleBack} />

      {/* Screen Content */}
      <View className="p-4">
        <ScrollView keyboardShouldPersistTaps="handled">
          <View className=" items-center">
            <Header text="Expression Analysis" />
            <Text className="font-Urbanist text-[#1F160F] text-2xl leading-relaxed text-center">
              Freely write down anything that's on your mind. Dr Lumi is here to
              listen...<View></View>
            </Text>
          </View>
          <View className="relative mt-5 rounded-lg bg-[#ccc4bf] p-1">
            <TextInput
              className="w-full h-44 p-3 border-2 border-primary rounded-lg text-2xl bg-white text-[#1F160F] font-UrbanistBold"
              multiline
              numberOfLines={4}
              maxLength={200}
              onChangeText={setExpression}
              value={expression}
              placeholder="Type your text here..."
              placeholderTextColor="#ccc4bf" // Gray placeholder text
            />
            <Text className="font-UrbanistBold text-[#1F160F] absolute bottom-3 left-1/2 transform -translate-x-1/2 texl-lg">
              {expression.length}/{200}
            </Text>
          </View>
          {/* Continue Button */}
          <ContinueButton handleNext={handleNext} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExpressionScreen;
