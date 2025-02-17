// app/(auth)/onboarding/mood.tsx
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useOnboardingStore } from "@/stores/onboarding";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressHeader from "./_lib/components/ProgressHeader";
import { moodEmotes } from "./_lib/constants";
import ContinueButton from "./_lib/components/ContinueButton";
import Header from "./_lib/components/Header";
import { MoodScore } from "./_lib/enums";

const MoodScreen = () => {
  const { mood, setMood } = useOnboardingStore();

  const handleNext = () => {
    if (!mood) return Alert.alert("Select a mood first"); // Prevent the user from navigating to the next screen if they haven't selected a mood
    router.push("/(onboarding)/professional-help"); // Navigate to the next screen
  };

  return (
    <SafeAreaView className="flex-1 bg-background ">
      <ProgressHeader
        currentStep={1}
        onBack={() => router.replace("/(auth)/welcome")}
      />
      <View className="flex-1 items-center w-full px-5">
        <Header text="How would you describe your mood?" />

        <View className="mt-5">
          {mood ? (
            <Text className="mt-5 capitalize font-UrbanistBold text-4xl text-gray-600">
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
              className="px-5 p-4 bg-white rounded-full mt-4 flex-row gap-x-2"
              onPress={() => setMood(key as keyof typeof MoodScore)}
              style={{
                shadowColor: "#ccc",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                backgroundColor: mood === key ? "#9BB068" : "#fff",
              }}
            >
              <Text style={{ fontSize: 20 }}>{moodEmotes[key]}</Text>
              <Text
                className="text-gray-600 text-center capitalize"
                style={{
                  fontSize: 20,
                  color: mood === key ? "#fff" : "#1F160F",
                }}
              >
                {key}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ContinueButton handleNext={handleNext} />
      </View>
    </SafeAreaView>
  );
};

export default MoodScreen;
