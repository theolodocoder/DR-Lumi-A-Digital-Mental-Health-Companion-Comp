import { images } from "@/constants";
import { useOnboardingStore } from "@/stores/onboarding";
import { router } from "expo-router";
import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ContinueButton from "./_lib/components/ContinueButton";
import ProgressHeader from "./_lib/components/ProgressHeader";

type Props = {};

const ProfessionalHelp = (props: Props) => {
  const { hadProfessionalHelp, setHadProfessionalHelp } = useOnboardingStore();

  const handleNext = () => {
    if (hadProfessionalHelp == null) {
      return Alert.alert("Please select an option");
    }
    router.replace("/(onboarding)/physical-symptoms");
  };

  return (
    <SafeAreaView className="flex-1 bg-background items-center">
      <ProgressHeader currentStep={2} onBack={() => router.back()} />
      <View className="w-full px-5 items-center mt-10">
        <Image source={images.profHelp} />
        <Text className="text-3xl tracking-tighter font-UrbanistExtraBold text-primary text-center mt-10">
          Have you sought professional help before?
        </Text>
        <View className="flex-row mt-5 gap-x-5">
          <TouchableOpacity
            className={`px-4 py-2 rounded-full ${
              hadProfessionalHelp === true ? "bg-green-500" : "bg-white"
            }`}
            onPress={() => setHadProfessionalHelp(true)}
          >
            <Text
              className={`${
                hadProfessionalHelp === true ? "text-white" : "text-primary"
              } font-UrbanistExtraBold text-xl`}
            >
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`px-4 py-2 rounded-full ml-4 ${
              hadProfessionalHelp === false ? "bg-red-500" : "bg-white"
            }`}
            onPress={() => setHadProfessionalHelp(false)}
          >
            <Text
              className={`${
                hadProfessionalHelp === false ? "text-white" : "text-primary"
              } font-UrbanistExtraBold text-xl`}
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
