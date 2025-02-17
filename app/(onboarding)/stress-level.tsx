import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressHeader from "./_lib/components/ProgressHeader";
import { router } from "expo-router";
import Header from "./_lib/components/Header";
import { useOnboardingStore } from "@/stores/onboarding";
import { stressLevels } from "./_lib/constants";
import { StressLevelScore } from "./_lib/enums";
import ContinueButton from "./_lib/components/ContinueButton";

type Props = {};

const StressLevel = (props: Props) => {
  const { stressLevel, setStressLevel } = useOnboardingStore();
  const [level, setLevel] = useState<{
    label: string;
    value: StressLevelScore;
    meaning: string;
  } | null>(null);

  useEffect(() => {
    const selectedLevel = stressLevels.find((lvl) => lvl.value === stressLevel);
    setLevel(selectedLevel || null);
  }, [stressLevel]);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ProgressHeader currentStep={6} onBack={() => router.back()} />

      <View className="mt-5 items-center px-5">
        <Header text="How would you rate your stress level?" />
        <View className="flex-row items-center justify-center py-5">
          {level ? (
            <Text
              className="font-UrbanistExtraBold text-primary"
              style={{ fontSize: 150 }}
            >
              {level.label}
            </Text>
          ) : (
            <Text
              className="font-UrbanistExtraBold text-[#ccc4bf]"
              style={{
                fontSize: 150,
              }}
            >
              0
            </Text>
          )}
        </View>
      </View>

      <View className="px-5">
        <View className="w-full flex-row items-center justify-center gap-x-2">
          {stressLevels.map((lvl) => (
            <TouchableOpacity
              key={lvl.label}
              className="flex-row items-center justify-center w-16 h-16 rounded-full shadow-xl shadow-gray-200 text-base bg-white"
              onPress={() => setStressLevel(lvl.value)}
              style={{
                shadowColor: "#ccc",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                backgroundColor:
                  lvl.value === stressLevel ? "#9BB068" : "white",
              }}
            >
              <Text
                className="font-UrbanistBold text-center text-2xl"
                style={{
                  color: lvl.value === stressLevel ? "white" : "#1F160F",
                }}
              >
                {lvl.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {level && (
          <Text
            className="py-5 font-UrbanistBold text-2xl text-center"
            style={{
              color: "#706a65",
            }}
          >
            {level.meaning}
          </Text>
        )}

        <ContinueButton
          handleNext={() => router.push("/(onboarding)/expressions")}
        />
      </View>
    </SafeAreaView>
  );
};

export default StressLevel;
