import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Chip from "@/components/Chip";
import { icons } from "@/constants";

type Props = {
  onBack: () => void;
  currentStep: number;
};

const ProgressHeader = ({ onBack, currentStep }: Props) => {
  return (
    <View className="w-full flex-row items-center justify-between p-4">
      {/* Back Button */}
      <TouchableOpacity
        onPress={onBack}
        className="flex-row items-center gap-x-5"
        // disabled={currentStep === 1}
        // style={{ opacity: currentStep === 1 ? 0.5 : 1 }}
      >
        <View className="h-16 w-16 border border-primary rounded-full items-center justify-center">
          <Image source={icons.backArrow} />
        </View>
        <Text className="text-2xl font-UrbanistExtraBold text-primary">
          Assessment
        </Text>
      </TouchableOpacity>

      {/* Progress Text */}
      <Chip
        text={`${currentStep} of 7`}
        bgColor="#E8DDD9"
        textColor="#926247"
      />
    </View>
  );
};

export default ProgressHeader;
