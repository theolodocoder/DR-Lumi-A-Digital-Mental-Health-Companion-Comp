import Button from "@/components/Button";
import ArrowRight from "@/components/icons/ArrowRight";
import { icons, images } from "@/constants";
import { supabase } from "@/lib/supabase";
import { useOnboardingStore } from "@/stores/onboarding";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getMoodMessage } from "./_lib/utils/getMood";

type Props = {};

const Complete = (props: Props) => {
  const { healthScore, calculateAndSetHealthScore } = useOnboardingStore();

  const { color, icon, message, mood } = getMoodMessage(healthScore || 0);

  useEffect(() => {
    calculateAndSetHealthScore();
  }, []);

  const handleComplete = async () => {
    const { data: user, error } = await supabase.auth.getUser();

    if (error || !user) {
      Alert.alert("Error fetching user data");
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({
      data: { is_new_user: false },
    });

    if (updateError) {
      Alert.alert("Failed to complete onboarding");
    } else {
      router.replace("/(root)/(tabs)/dashboard");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#9BB068] items-center">
      <View className="mt-10 items-center">
        <Image source={icons.checkSolid} />
        <Text className="text-white font-UrbanistExtraBold text-5xl py-5">
          You're all set up.
        </Text>
        <Text className="text-white font-Urbanist text-2xl">
          Your health score is:
        </Text>
      </View>
      <View style={styles.healthScoreContainer}>
        <Image source={images.healthScoreFrame} />
        <Text style={{ ...styles.healthScoreText }}>
          {healthScore + "%" || "Score"}
        </Text>
      </View>
      <View className="mt-5 items-center px-5 py-5">
        <Text className=" font-Urbanist text-2xl px-5 text-center text-white">
          {message}
        </Text>
        <View className="flex-row items-center gap-x-2 mt-5">
          <Text style={styles.moodText}>MOOD:</Text>
          <MaterialIcons name={icon} color={"white"} size={20} />
          <Text style={styles.moodText}>{mood.toLocaleUpperCase()}</Text>
        </View>
      </View>
      <Button
        intent={"outline"}
        size={"large"}
        className="gap-x-5 mt-3"
        style={{
          borderColor: "white",
        }}
        onPress={handleComplete}
      >
        <Text className="capitalize text-white font-UrbanistExtraBold text-2xl">
          Let's be mindful
        </Text>
        <ArrowRight />
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  healthScoreContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  healthScoreText: {
    position: "absolute",
    color: "#9BB068",
    fontSize: 80,
    fontWeight: "bold",
  },
  moodText: {
    paddingVertical: 5,
    fontSize: 16,
    color: "white",
    fontFamily: "Urbanist-ExtraBold",
  },
});

export default Complete;
