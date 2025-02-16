// app/(auth)/onboarding/sleep-quality.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { useOnboardingStore } from "@/stores/onboarding";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressHeader from "./_lib/components/ProgressHeader";
import Header from "./_lib/components/Header";
import ContinueButton from "./_lib/components/ContinueButton";

const SleepQualityScreen = () => {
  const { sleepQuality, setSleepQuality } = useOnboardingStore();

  const handleNext = () => {
    router.push("/(onboarding)/stress-level"); // Navigate to the next screen
  };

  return (
    <SafeAreaView className="flex-1 bg-background items-center">
      <ProgressHeader currentStep={4} onBack={() => router.back()} />
      <View className="flex-1 items-center w-full px-5">
        <Header text="How would you rate your sleep quality?" />

        <ContinueButton handleNext={handleNext} />
      </View>
    </SafeAreaView>
  );
};

export default SleepQualityScreen;
