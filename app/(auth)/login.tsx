import Button from "@/components/Button";
import ArrowRight from "@/components/icons/ArrowRight";
import InputField from "@/components/InputField";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "./_lib/components/AuthHeader";
import { LoginFormData } from "./_lib/types";
import { Controller, useForm } from "react-hook-form";
import { loginSchema } from "./_lib/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import OAuth from "./_lib/components/OAuth";
import { supabase } from "@/lib/supabase";
import LoadingScreen from "@/screens/LoadingScreen";

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isLoading },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    if (isValid) {
      const {
        data: { session },
        error,
      } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) Alert.alert(error.message);

      if (session) {
        console.log(session);
        reset();
        setShowLoadingScreen(true);
        const isNewUser = session?.user?.user_metadata?.is_new_user;
        setTimeout(() => {
          if (isNewUser) {
            router.replace("/(onboarding)/mood");
          } else {
            router.replace("/(root)/(tabs)/dashboard");
          }
        }, 2000);
      }
    }
  };

  if (showLoadingScreen) {
    return <LoadingScreen loadingText="Logging you in..." />;
  }

  return (
    <SafeAreaView edges={["bottom"]} className="flex-1 bg-[#F7F4F2]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <AuthHeader />
          {/* Form Section */}
          <View className="py-5 px-5 items-center justify-center w-full">
            <Text className="tracking-tighter capitalize font-UrbanistExtraBold font-extrabold text-5xl text-[#4B3425] py-16">
              Login to lumi
            </Text>

            <View className="w-full space-y-6">
              {/* Email Input */}
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    label="Email Address"
                    placeholder="Enter your email address..."
                    icon={
                      <Ionicons name="mail-outline" size={20} color="#6B7280" />
                    }
                    iconPosition="left"
                    containerClassName="mb-5"
                    error={errors.email?.message} // Display error message
                  />
                )}
              />

              {/* Password Input */}
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    label="Password"
                    placeholder="Enter your password..."
                    secureTextEntry
                    icon={
                      <Ionicons
                        name="lock-closed-outline"
                        size={20}
                        color="#6B7280"
                      />
                    }
                    iconPosition="left"
                    containerClassName="mb-5"
                    error={errors.password?.message} // Display error message
                  />
                )}
              />

              <Button
                intent={"primary"}
                size={"large"}
                className="gap-x-5 mt-3"
                onPress={handleSubmit(onSubmit)}
                // disabled={!isValid}
              >
                <Text className="text-white font-UrbanistExtraBold text-2xl">
                  Login
                </Text>
                <ArrowRight />
              </Button>
            </View>
          </View>

          {/* OAuth */}
          <OAuth />

          {/* Footer Section */}
          <View className="w-full items-center justify-center mt-10">
            <Text className="font-Urbanist text-[#4B3425] text-xl mt-5">
              Don't have an account yet?{" "}
              <Text
                onPress={() => {
                  router.replace("/(auth)/register");
                }}
                className="text-[#FE814B] underline font-UrbanistBold"
              >
                Register
              </Text>
            </Text>
            <Text className="text-xl text-[#FE814B] underline font-UrbanistBold mt-2">
              Forgot Password?
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginPage;
