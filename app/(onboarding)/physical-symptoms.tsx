import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressHeader from "./_lib/components/ProgressHeader";
import { router } from "expo-router";
import Header from "./_lib/components/Header";
import ContinueButton from "./_lib/components/ContinueButton";
import { useOnboardingStore } from "@/stores/onboarding";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { PhysicalSymptomsText } from "./_lib/enums";

type Props = {};

const options = [
  {
    label: "None",
    value: "None",
    icon: "check",
  },
  {
    label: "Mild",
    value: "Mild",
    icon: "check",
  },
  {
    label: "Severe",
    value: "Severe",
    icon: "check",
  },
];

const PhysicalSymptoms = (props: Props) => {
  const { physicalSymptoms, setPhysicalSymptoms } = useOnboardingStore();
  const handleNext = () => {
    router.push("/(onboarding)/sleep-quality"); // Navigate to the next screen
  };
  return (
    <SafeAreaView className="flex-1 bg-background items-center">
      <ProgressHeader currentStep={3} onBack={() => router.back()} />
      <View className="flex-1 items-center w-full px-5">
        <Header text="Are you experiencing any physical symptoms of distress?" />
        <View className="mt-5 mb-5 w-full">
          {options.map((option, index) => {
            const isSelected = physicalSymptoms === option.value;
            return (
              <TouchableOpacity
                className={`flex-row w-full items-center mt-1 p-5 mb-2 ${
                  isSelected ? "bg-[#9BB068]" : "bg-white"
                }`}
                style={{
                  shadowColor: "#ccc",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  height: 100,
                  borderRadius: 20,
                }}
                key={`${option.value}-${index}`}
                onPress={() => setPhysicalSymptoms(option.value)}
              >
                <Ionicons
                  name={isSelected ? "radio-button-on" : "radio-button-off"}
                  size={24}
                  color={isSelected ? "white" : "black"}
                />
                <Text
                  className={`font-UrbanistBold ml-2 text-xl ${
                    isSelected ? "text-white" : "text-black"
                  }`}
                >
                  {
                    PhysicalSymptomsText[
                      option.label as keyof typeof PhysicalSymptomsText
                    ]
                  }
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <ContinueButton handleNext={handleNext} />
      </View>
    </SafeAreaView>
  );
};

export default PhysicalSymptoms;
