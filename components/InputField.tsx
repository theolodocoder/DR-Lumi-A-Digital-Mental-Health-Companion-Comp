import React from "react";
import {
  TextInput,
  Text,
  View,
  TextInputProps,
  Image,
  StyleProp,
  ImageStyle,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { cn } from "@/lib/utils"; // Utility for combining Tailwind classes
import { SafeAreaView } from "react-native-safe-area-context";
import FormError from "./FormError";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  success?: boolean;
  icon?: React.ReactNode; // Optional icon prop
  iconPosition?: "left" | "right"; // Icon position (left or right of the input)
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  iconStyle?: StyleProp<ImageStyle>; // Optional style for the icon
}

const InputField = React.forwardRef<TextInput, InputProps>(
  (
    {
      label,
      error,
      success,
      icon,
      iconPosition = "left",
      containerClassName,
      inputClassName,
      labelClassName,
      errorClassName,
      iconStyle,
      ...props
    },
    ref
  ) => {
    // Determine input border color based on state
    const inputBorderColor = error
      ? "border-red-500"
      : success
      ? "border-green-500"
      : "border-gray-300";

    return (
      <KeyboardAvoidingView className={cn("w-full mb-4", containerClassName)}>
        {label && (
          <Text
            className={cn(
              "text-lg font-UrbanistExtraBold text-primary mb-2",
              labelClassName
            )}
          >
            {label}
          </Text>
        )}

        <TouchableWithoutFeedback>
          <View
            className={cn(
              "flex-row items-center p-5 rounded-full shadow-xl shadow-gray-200 text-base bg-white",
              inputBorderColor,
              inputClassName
            )}
            style={{
              borderWidth: error && 1,
              borderColor: error ? "#FE814B" : "",
            }}
          >
            {icon && iconPosition === "left" && (
              <View className="mr-2 pt-1" style={iconStyle}>
                {icon}
              </View>
            )}

            <TextInput
              ref={ref}
              className="font-UrbanistExtraBold h-full text-primary w-full placeholder:text-xl"
              placeholderTextColor="#706a65"
              {...props}
            />

            {icon && iconPosition === "right" && (
              <View className="ml-2" style={iconStyle}>
                {icon}
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>

        {/* Error Message */}
        {error && <FormError errorText={error} />}
      </KeyboardAvoidingView>
    );
  }
);

export default InputField;
