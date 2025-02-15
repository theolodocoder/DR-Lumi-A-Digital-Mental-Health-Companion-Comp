import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface RadioButtonProps {
  checked: boolean;
  onPress: () => void;
}

const RadioButton = ({ checked, onPress }: RadioButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center">
      <View
        className={`w-5 h-5 rounded-full  border-2 justify-center items-center ${
          checked ? "bg-[#9BB068] border-[#9BB068]" : "border-primary"
        }`}
      >
        {
          <MaterialIcons
            name="check"
            size={12}
            color={checked ? "white" : "#4B3425"}
          />
        }
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
