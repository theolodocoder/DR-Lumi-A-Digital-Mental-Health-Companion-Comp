import { View, Text } from "react-native";
import React from "react";

type Props = {
  text: string;
};

const Header = ({ text }: Props) => {
  return (
    <Text
      className="font-UrbanistExtraBold leading-relaxed text-primary text-center mb-4 tracking-tighter mt-10"
      style={{
        fontSize: 30,
      }}
    >
      {text}
    </Text>
  );
};

export default Header;
