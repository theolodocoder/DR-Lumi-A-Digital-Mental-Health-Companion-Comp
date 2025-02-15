import { Image } from "react-native";
import { images } from "@/constants";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const AuthHeader = (props: Props) => {
  return (
    <SafeAreaView className="h-44 shadow-sm bg-[#9BB068] justify-center items-center">
      <Image source={images.logoWhite} className="scale-50" />
    </SafeAreaView>
  );
};

export default AuthHeader;
