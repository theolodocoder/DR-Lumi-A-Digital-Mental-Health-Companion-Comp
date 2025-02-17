import { images } from "@/constants";
import React, { useEffect, useRef } from "react";
import { Animated, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const CompilationLoader = (props: Props) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 4,
        // duration: Infinity,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 4],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FE814B",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.Image
        source={images.logoLoad}
        style={{ transform: [{ rotate: spin }] }}
      />
      <View
        style={{ marginTop: 20, alignItems: "center", paddingHorizontal: 20 }}
      >
        <Text
          style={{
            fontFamily: "Urbanist-ExtraBold",
            color: "white",
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          Compiling Data...
        </Text>
        <Text
          style={{
            fontFamily: "Urbanist",
            color: "white",
            fontSize: 20,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Please wait... We’re calculating the data based on your assessment
          inputs.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CompilationLoader;
