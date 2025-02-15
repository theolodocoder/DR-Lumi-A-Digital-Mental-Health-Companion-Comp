// app/(auth)/onboarding/mood.tsx
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useOnboardingStore } from "@/stores/onboarding";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressHeader from "./_lib/components/ProgressHeader";
import { moodEmotes } from "./_lib/constants";
import ContinueButton from "./_lib/components/ContinueButton";

const MoodScreen = () => {
  const { mood, setMood } = useOnboardingStore();

  const handleNext = () => {
    if (!mood) return Alert.alert("Select a mood first"); // Prevent the user from navigating to the next screen if they haven't selected a mood
    router.push("/(onboarding)/professional-help"); // Navigate to the next screen
  };

  return (
    <SafeAreaView className="flex-1 bg-background ">
      <ProgressHeader currentStep={1} onBack={() => router.back()} />
      <View className="flex-1 items-center w-full px-5">
        <Text className="font-UrbanistExtraBold text-primary text-5xl text-center mb-4 tracking-tighter mt-10">
          How would you describe your mood?
        </Text>

        <View className="mt-5">
          {mood ? (
            <Text className="mt-5 font-UrbanistBold text-3xl text-gray-600">
              {mood}
            </Text>
          ) : (
            <Text className="text-gray-600 text-center font-UrbanistSemiBold text-3xl">
              Select an emoji that best describes your mood
            </Text>
          )}
        </View>

        <View className="mt-5 flex flex-row flex-wrap gap-x-5 w-full">
          {Object.entries(moodEmotes).map(([key, value]) => (
            <TouchableOpacity
              key={key}
              className="p-4 bg-white rounded-lg mt-4 flex-row"
              onPress={() => setMood(key)}
            >
              <Text>{moodEmotes[key]}</Text>
              <Text className="text-gray-600 text-center">{key}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <ContinueButton handleNext={handleNext} />
      </View>
    </SafeAreaView>
  );
};

export default MoodScreen;
