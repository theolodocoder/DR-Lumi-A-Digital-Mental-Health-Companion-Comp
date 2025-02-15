import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import Button from "@/components/Button";
import ArrowRight from "@/components/icons/ArrowRight";

type Props = {};

const WelcomePage = (props: Props) => {
  return (
    <SafeAreaView className="bg-[#F7F4F2] flex flex-1 items-center py-12 px-5">
      <Image source={images.logo} />
      <View className="flex items-center justify-center mt-5">
        <Text className="text-5xl font-UrbanistExtraBold text-[#4B3425] py-2 tracking-tighter">
          Welcome to <Text className="text-[#926247]">Lumi</Text>
        </Text>
        <Text className="text-2xl font-Urbanist text-center mt-2 leading-10">
          Your mindful mental health AI companion for everyone, anywhere 🍃
        </Text>
      </View>
      <Image source={images.onboard1} className="mt-10" />
      <Button
        intent={"primary"}
        size={"large"}
        className="flex-row gap-x-3 items-center justify-center mt-5"
        onPress={() => {
          router.push("/(auth)/register");
        }}
      >
        <Text className="text-white font-UrbanistExtraBold text-2xl">
          Get Started
        </Text>
        <ArrowRight />
      </Button>
      <View className="absolute bottom-14">
        <Text className="font-Urbanist text-[#4B3425] text-xl mt-5">
          Already have an account{" "}
          <Link
            href="/(auth)/login"
            className="text-[#FE814B] underline font-UrbanistBold"
          >
            Login
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
