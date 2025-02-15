import { Image, View, Text } from "react-native";
import React from "react";
import { icons } from "@/constants";

type Props = {
  errorText: string;
};

const FormError = ({ errorText }: Props) => {
  return (
    <View
      className="w-full flex-row justify-center gap-x-2 py-2 rounded-full border mt-2 items-center"
      style={{ backgroundColor: "#FFD2C2", borderColor: "#FE814B" }}
    >
      <Image source={icons.errorAlert} />
      <Text
        className="font-UrbanistExtraBold text-center"
        style={{
          color: "#FE814B",
        }}
      >
        {errorText}
      </Text>
    </View>
  );
};

export default FormError;
