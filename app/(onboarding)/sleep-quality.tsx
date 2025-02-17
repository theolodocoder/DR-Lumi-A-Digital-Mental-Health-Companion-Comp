import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { useOnboardingStore } from "@/stores/onboarding";
import React, { useState } from "react";
import ProgressHeader from "./_lib/components/ProgressHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./_lib/components/Header";
import ContinueButton from "./_lib/components/ContinueButton";
import Slider from "@react-native-community/slider";
import { SleepQualityScore } from "./_lib/enums";
import { sleepQualityOptions } from "./_lib/constants";

const SleepQualityScreen = () => {
  const { setSleepQuality } = useOnboardingStore();
  const [selectedQuality, setSelectedQuality] = useState(2); // Default to Fair

  const handleNext = () => {
    const quality = sleepQualityOptions[selectedQuality]
      .label as keyof typeof SleepQualityScore;
    setSleepQuality(quality);
    router.push("/(onboarding)/medications"); // Update with your next screen
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ProgressHeader currentStep={4} onBack={handleBack} />

      <View className="p-4 flex-1">
        <ScrollView
          contentContainerClassName="flex-grow"
          keyboardShouldPersistTaps="handled"
        >
          <View className="items-center mb-8 px-5">
            <Header text="How would you rate your sleep quality?" />
          </View>

          {/* Slider Container */}
          <View className="flex-1 justify-center mt-10">
            {/* Current Selection Display */}
            <View className="items-center mb-8">
              <Text className="text-4xl font-UrbanistBold text-primary">
                {sleepQualityOptions[selectedQuality].label}
              </Text>
              <Text className="text-xl font-Urbanist text-gray-600 mt-2">
                {sleepQualityOptions[selectedQuality].hours}
              </Text>
            </View>

            {/* Custom Slider */}
            <View className="px-4">
              <Slider
                minimumValue={0}
                maximumValue={4}
                step={1}
                value={selectedQuality}
                onValueChange={setSelectedQuality}
                minimumTrackTintColor="#FE631B" // Blue-500
                maximumTrackTintColor="#E8DDD9" // Gray-200
                thumbTintColor="#FE814B" // Blue-500
                style={{ height: 100 }}
              />

              {/* Slider Labels */}
              <View className="flex-row justify-between mt-2">
                {sleepQualityOptions.map((option) => (
                  <Text
                    key={option.value}
                    className="text-sm font-UrbanistBold text-primary"
                    style={{
                      width: `${100 / sleepQualityOptions.length}%`,
                      textAlign: "center",
                    }}
                  >
                    {option.label}
                  </Text>
                ))}
              </View>
            </View>
          </View>

          <ContinueButton handleNext={handleNext} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SleepQualityScreen;
