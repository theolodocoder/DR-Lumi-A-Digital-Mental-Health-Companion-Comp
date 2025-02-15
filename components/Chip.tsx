import { View, Text } from "react-native";
import React from "react";

type Props = {
  textColor?: string;
  bgColor?: string;
  text: string;
};

const Chip = ({ textColor = "#000", bgColor = "#fff", text }: Props) => {
  return (
    <View
      className={`inline-flex px-5 py-2 items-center justify-center bg-[${bgColor}] rounded-full`}
    >
      <Text className={`text-[${textColor}] font-UrbanistExtraBold`}>
        {text}
      </Text>
    </View>
  );
};

export default Chip;
