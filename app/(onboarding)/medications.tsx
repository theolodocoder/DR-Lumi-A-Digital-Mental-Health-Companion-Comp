import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressHeader from "./_lib/components/ProgressHeader";
import { router } from "expo-router";
import Header from "./_lib/components/Header";
import ContinueButton from "./_lib/components/ContinueButton";
import { useOnboardingStore } from "@/stores/onboarding";
import { MedicationsScore } from "./_lib/enums";
import SelectionCard from "./_lib/components/SelectionCard";
import { medicationOptions } from "./_lib/constants";

const Medications = () => {
  const { medications, setMedications } = useOnboardingStore();
  const [selected, setSelected] = useState<sting | null>(medications);

  const handleSelect = (value: string) => {
    setSelected(value);
    setMedications(value as keyof typeof MedicationsScore);
  };

  return (
    <SafeAreaView className="flex-1 bg-background items-center">
      <ProgressHeader currentStep={5} onBack={() => router.back()} />

      <View className="flex-1 items-center w-full px-5">
        <Header text="Are you taking any medications or supplements?" />

        {/* Selection Cards Grid */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          {medicationOptions.map((item) => (
            <View key={item.label} style={{ width: "48%", marginVertical: 10 }}>
              <SelectionCard
                label={item.label}
                icon={item.icon}
                selected={selected === item.value}
                onPress={() => handleSelect(item.value)}
              />
            </View>
          ))}
        </View>

        <ContinueButton
          handleNext={() => router.push("/(onboarding)/stress-level")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Medications;
