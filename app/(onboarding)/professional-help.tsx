import { images } from "@/constants";
import { useOnboardingStore } from "@/stores/onboarding";
import { router } from "expo-router";
import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ContinueButton from "./_lib/components/ContinueButton";
import ProgressHeader from "./_lib/components/ProgressHeader";
import Header from "./_lib/components/Header";

type Props = {};

const ProfessionalHelp = (props: Props) => {
  const { hadProfessionalHelp, setHadProfessionalHelp } = useOnboardingStore();

  const handleNext = () => {
    if (hadProfessionalHelp == null) {
      return Alert.alert("Please select an option");
    }
    router.push("/(onboarding)/physical-symptoms");
  };

  return (
    <SafeAreaView className="flex-1 bg-background items-center">
      <ProgressHeader currentStep={2} onBack={() => router.back()} />
      <View className="w-full px-5 items-center mt-10">
        <Image source={images.profHelp} />
        <Header text="Have you ever sought professional help before?" />
        <View className="flex-row mt-5 gap-x-5">
          <TouchableOpacity
            className={` flex-1 py-5 items-center rounded-full ${
              hadProfessionalHelp === true ? "bg-green-500" : "bg-white"
            }`}
            onPress={() => setHadProfessionalHelp(true)}
          >
            <Text
              className={`${
                hadProfessionalHelp === true ? "text-white" : "text-primary"
              } font-UrbanistExtraBold text-2xl`}
            >
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-5 items-center rounded-full ml-4 ${
              hadProfessionalHelp === false ? "bg-red-500" : "bg-white"
            }`}
            onPress={() => setHadProfessionalHelp(false)}
          >
            <Text
              className={`${
                hadProfessionalHelp === false ? "text-white" : "text-primary"
              } font-UrbanistExtraBold text-2xl`}
            >
              No
            </Text>
          </TouchableOpacity>
        </View>
        <ContinueButton handleNext={handleNext} />
      </View>
    </SafeAreaView>
  );
};

export default ProfessionalHelp;
