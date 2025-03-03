import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";

type SelectionCardProps = {
  label: string;
  icon: string;
  selected: boolean;
  onPress: () => void;
};

const SelectionCard = ({
  label,
  icon,
  selected,
  onPress,
}: SelectionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={clsx(
        "w-full p-5 flex flex-col justify-center",
        selected ? "bg-[#9BB068] border-[#9BB068]" : "bg-white border-gray-200"
      )}
      style={{
        borderRadius: 20,
        shadowColor: "#ccc",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <MaterialIcons
        name={icon}
        size={24}
        color={selected ? "white" : "#5B4636"}
      />
      <Text
        className={clsx(
          "mt-20 font-UrbanistBold text-xl text-primary",
          selected ? "text-white" : "text-brown-900"
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default SelectionCard;
