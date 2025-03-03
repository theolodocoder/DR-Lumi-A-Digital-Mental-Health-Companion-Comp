// app/(app)/mood/index.tsx
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Mock data for demo purposes - you'll replace with actual data from Supabase
const MOCK_MOOD_DATA = [
  { date: "2025-02-22", mood: 4, note: "Had a great study session today" },
  { date: "2025-02-23", mood: 3, note: "Feeling okay, but tired" },
  { date: "2025-02-24", mood: 5, note: "Aced my exam!" },
  { date: "2025-02-25", mood: 3, note: "Average day" },
  { date: "2025-02-26", mood: 2, note: "Stressed about upcoming project" },
  { date: "2025-02-27", mood: 4, note: "Made good progress on assignments" },
  { date: "2025-02-28", mood: 4, note: "Friday feeling!" },
];

const screenWidth = Dimensions.get("window").width;

export default function MoodTrackerHome() {
  const router = useRouter();
  const [moodData, setMoodData] = useState(MOCK_MOOD_DATA);
  const [todayCheckedIn, setTodayCheckedIn] = useState(false);

  useEffect(() => {
    // Check if user has checked in today
    const today = new Date().toISOString().split("T")[0];
    setTodayCheckedIn(moodData.some((entry) => entry.date === today));

    // In a real app, you'd fetch mood data from Supabase here
  }, []);

  const chartData = {
    labels: moodData.map((entry) => entry.date.slice(5)), // Show only MM-DD
    datasets: [
      {
        data: moodData.map((entry) => entry.mood),
        color: (opacity = 1) => `rgba(139, 92, 246, ${opacity})`, // Violet color
        strokeWidth: 2,
      },
    ],
  };

  const moodEmojis = ["😞", "😔", "😐", "🙂", "😄"];

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(139, 92, 246, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#8b5cf6",
    },
  };

  return (
    <ScrollView className="flex-1 bg-white py-10">
      <View className="p-4">
        {/* Greeting and Check-in Button */}
        <View className="flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-2xl font-bold text-gray-800">
              How are you feeling?
            </Text>
            <Text className="text-gray-500">
              Track your mood and well-being
            </Text>
          </View>
          {!todayCheckedIn ? (
            <TouchableOpacity
              className="bg-violet-500 px-4 py-2 rounded-full"
              onPress={() => router.push("/(root)/(tabs)/(mood)/check-in")}
            >
              <Text className="text-white font-medium">Check In</Text>
            </TouchableOpacity>
          ) : (
            <View className="bg-green-100 px-4 py-2 rounded-full">
              <Text className="text-green-700 font-medium">Done Today ✓</Text>
            </View>
          )}
        </View>

        {/* Weekly Mood Chart */}
        <View className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Your Mood This Week
          </Text>
          <LineChart
            data={chartData}
            width={screenWidth - 40}
            height={180}
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            fromZero
            yAxisSuffix=""
            yAxisLabel=""
            yLabelsOffset={10}
            segments={5}
          />
          <View className="flex-row justify-between mt-2">
            {moodEmojis.map((emoji, index) => (
              <Text key={index} className="text-lg">
                {emoji}
              </Text>
            ))}
          </View>
        </View>

        {/* Recent Entries */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-semibold text-gray-800">
              Recent Entries
            </Text>
            <Link href="/(root)/(tabs)/(mood)/history" asChild>
              <TouchableOpacity>
                <Text className="text-violet-500">See All</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {moodData
            .slice(-3)
            .reverse()
            .map((entry, index) => (
              <TouchableOpacity
                key={index}
                className="bg-white rounded-xl shadow-sm p-4 mb-3 flex-row items-center"
                onPress={() =>
                  router.push({
                    pathname: "/(root)/(tabs)/(mood)/journal",
                    params: { date: entry.date, mood: entry.mood },
                  })
                }
              >
                <Text className="text-2xl mr-4">
                  {moodEmojis[entry.mood - 1]}
                </Text>
                <View className="flex-1">
                  <Text className="text-gray-800 font-medium">
                    {new Date(entry.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })}
                  </Text>
                  <Text className="text-gray-500" numberOfLines={1}>
                    {entry.note}
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="#8b5cf6"
                />
              </TouchableOpacity>
            ))}
        </View>

        {/* Quick Actions */}
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity
            className="bg-violet-100 rounded-xl p-4 items-center"
            style={{ width: "48%" }}
            onPress={() => router.push("/(root)/(tabs)/(mood)/journal")}
          >
            <MaterialCommunityIcons
              name="notebook-outline"
              size={24}
              color="#8b5cf6"
            />
            <Text className="text-violet-700 font-medium mt-2">Journal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-violet-100 rounded-xl p-4 items-center"
            style={{ width: "48%" }}
            onPress={() => router.push("/(root)/(tabs)/(mood)/history")}
          >
            <MaterialCommunityIcons
              name="chart-line"
              size={24}
              color="#8b5cf6"
            />
            <Text className="text-violet-700 font-medium mt-2">Insights</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
