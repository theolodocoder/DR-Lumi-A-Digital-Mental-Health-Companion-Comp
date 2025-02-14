import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex flex-1 items-center justify-center bg-red-100">
      <Text className="font-Urbanist text-red-500">
        Edit app/index.tsx to edit this screen.
      </Text>
    </SafeAreaView>
  );
}
