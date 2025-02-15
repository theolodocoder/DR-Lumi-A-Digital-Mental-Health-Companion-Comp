import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/Button";
import ArrowRight from "@/components/icons/ArrowRight";

type Props = {
  handleNext: () => void;
};

const ContinueButton = ({ handleNext }: Props) => {
  return (
    <Button
      intent={"primary"}
      size={"large"}
      className="w-full gap-x-5 mt-10"
      onPress={handleNext}
    >
      <Text className="text-white font-UrbanistExtraBold text-2xl">
        Continue
      </Text>
      <ArrowRight />
    </Button>
  );
};

export default ContinueButton;
