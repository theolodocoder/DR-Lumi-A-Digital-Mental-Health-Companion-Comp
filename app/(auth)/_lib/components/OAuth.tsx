import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const socialAuthProviders = [
  { name: "Facebook", icon: "facebook", color: "#926247", enabled: false },
  { name: "Google", icon: "google", color: "#926247", enabled: true },
  { name: "Instagram", icon: "instagram", color: "#926247", enabled: false },
];

export default function OAuth() {
  const handleAuth = (provider: string) => {
    if (provider === "Google") {
      console.log("Google Auth Triggered");
      // Add Google OAuth logic here
    }
  };

  return (
    <View className="flex-row justify-center gap-4 mt-4">
      {socialAuthProviders.map(({ name, icon, color, enabled }) => (
        <TouchableOpacity
          key={name}
          disabled={!enabled}
          onPress={() => enabled && handleAuth(name)}
          className={`w-20 h-20 rounded-full flex items-center justify-center ${
            enabled ? "bg-[#E8DDD9]" : "bg-neutral-300 opacity-50"
          }`}
        >
          <MaterialCommunityIcons name={icon} size={30} color={color} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
