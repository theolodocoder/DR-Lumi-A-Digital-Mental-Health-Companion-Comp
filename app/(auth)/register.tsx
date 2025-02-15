import Button from "@/components/Button";
import RadioButton from "@/components/RadioButton";
import ArrowRight from "@/components/icons/ArrowRight";
import InputField from "@/components/InputField";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "./_lib/components/AuthHeader";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormError from "@/components/FormError";
import { supabase } from "@/lib/supabase";
import LoadingScreen from "@/screens/LoadingScreen";

// Define validation schema using Yup
const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  acceptedTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
};

const RegisterPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isLoading },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    mode: "onChange", // Validate on every change
  });

  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const onSubmit = async (data: RegisterFormData) => {
    if (isValid) {
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            is_new_user: true,
          },
        },
      });

      if (error) Alert.alert(error.message);
      if (session) {
        console.log(session);
        reset();
        setShowLoadingScreen(true);

        setTimeout(() => {
          router.replace("/(onboarding)/mood");
        }, 2000); // Simulate loading screen
      }
    }
    // Handle registration logic here (e.g., API call)
  };

  // Render loading screen
  if (showLoadingScreen) {
    return <LoadingScreen loadingText="Creating your account..." />;
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
              Register with lumi
            </Text>

            <View className="w-full">
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

              {/* Confirm Password Input */}
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    label="Confirm Password"
                    placeholder="Confirm your password..."
                    icon={
                      <Ionicons
                        name="lock-closed-outline"
                        size={20}
                        color="#6B7280"
                      />
                    }
                    iconPosition="left"
                    containerClassName="mb-5"
                    error={errors.confirmPassword?.message} // Display error message
                  />
                )}
              />

              {/* Terms and Conditions Radio Button */}
              <Controller
                control={control}
                name="acceptedTerms"
                render={({ field: { onChange, value } }) => (
                  <View className="mb-6">
                    <View className="flex-row items-center">
                      <RadioButton
                        checked={value}
                        onPress={() => onChange(!value)} // Toggle terms acceptance
                      />
                      <Text className="capitalize font-UrbanistSemiBold text-lg ml-2 text-primary">
                        I agree with the{" "}
                        <Text className="text-[#9BB068] underline">
                          Terms and Conditions
                        </Text>
                      </Text>
                    </View>
                    {/* Display error message for terms and conditions */}
                    {errors.acceptedTerms && (
                      <FormError
                        errorText={errors.acceptedTerms.message || ""}
                      />
                    )}
                  </View>
                )}
              />

              {/* Register Button */}
              <Button
                intent={"primary"}
                size={"large"}
                className="gap-x-5"
                onPress={handleSubmit(onSubmit)} // Handle form submission
                // disabled={!isValid} // Disable button if form is invalid
              >
                <Text className="text-white font-UrbanistExtraBold text-2xl">
                  Register
                </Text>
                <ArrowRight />
              </Button>
            </View>
          </View>

          {/* Footer Section */}
          <View className="w-full items-center justify-center ">
            <Text className="font-Urbanist text-[#4B3425] text-xl mt-5 capitalize">
              Already have an account?{" "}
              <Text
                onPress={() => {
                  router.replace("/(auth)/login");
                }}
                className="text-[#FE814B] underline font-UrbanistBold"
              >
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterPage;
