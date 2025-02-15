// app/(auth)/onboarding/sleep-quality.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { useOnboardingStore } from "@/stores/onboarding";
import { router } from "expo-router";

const SleepQualityScreen = () => {
  const { sleepQuality, setSleepQuality } = useOnboardingStore();

  const handleNext = () => {
    router.push("/(onboarding)/stress-level"); // Navigate to the next screen
  };

  return (
    <View className="flex-1 p-4 justify-center">
      <Text className="text-2xl font-bold mb-4">
        How would you rate your sleep quality?
      </Text>
      <TouchableOpacity
        className="p-4 bg-blue-500 rounded-lg mb-2"
        onPress={() => setSleepQuality("Excellent")}
      >
        <Text className="text-white text-center">Excellent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="p-4 bg-blue-500 rounded-lg mb-2"
        onPress={() => setSleepQuality("Good")}
      >
        <Text className="text-white text-center">Good</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="p-4 bg-blue-500 rounded-lg mb-2"
        onPress={() => setSleepQuality("Poor")}
      >
        <Text className="text-white text-center">Poor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="p-4 bg-green-500 rounded-lg mt-4"
        onPress={handleNext}
      >
        <Text className="text-white text-center">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SleepQualityScreen;
