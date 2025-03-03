// app/(app)/mood/history.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { LineChart, BarChart } from "react-native-chart-kit";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Mock data for demo purposes - replace with actual data from Supabase
const MOCK_MOOD_DATA = [
  { date: "2025-01-01", mood: 3, note: "New Year's Day. Feeling optimistic." },
  { date: "2025-01-02", mood: 4, note: "Good study session today." },
  { date: "2025-01-03", mood: 4, note: "Made progress on my project." },
  { date: "2025-01-04", mood: 2, note: "Feeling stressed about deadlines." },
  { date: "2025-01-05", mood: 3, note: "Recovering from stress." },
  { date: "2025-01-06", mood: 4, note: "Monday wasn't too bad!" },
  { date: "2025-01-07", mood: 5, note: "Great news from home!" },
  { date: "2025-01-08", mood: 4, note: "Productive day." },
  { date: "2025-01-09", mood: 3, note: "Average day. Tired." },
  { date: "2025-01-10", mood: 4, note: "Friday feeling!" },
  { date: "2025-01-15", mood: 5, note: "Aced my exam!" },
  { date: "2025-01-20", mood: 2, note: "Difficult day. Failed assignment." },
  { date: "2025-01-25", mood: 3, note: "Weekend plans canceled." },
  { date: "2025-01-30", mood: 4, note: "End of month reflection. Going well!" },
  { date: "2025-02-05", mood: 3, note: "New month, new challenges." },
  { date: "2025-02-10", mood: 4, note: "Good progress on thesis." },
  { date: "2025-02-15", mood: 2, note: "Feeling under the weather." },
  { date: "2025-02-20", mood: 3, note: "Recovering slowly." },
  { date: "2025-02-22", mood: 4, note: "Had a great study session today" },
  { date: "2025-02-23", mood: 3, note: "Feeling okay, but tired" },
  { date: "2025-02-24", mood: 5, note: "Aced my exam!" },
  { date: "2025-02-25", mood: 3, note: "Average day" },
  { date: "2025-02-26", mood: 2, note: "Stressed about upcoming project" },
  { date: "2025-02-27", mood: 4, note: "Made good progress on assignments" },
  { date: "2025-02-28", mood: 4, note: "Friday feeling!" },
];

const screenWidth = Dimensions.get("window").width;

export default function MoodHistory() {
  const router = useRouter();
  const [timeRange, setTimeRange] = useState("week"); // 'week', 'month', 'year'
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    // Filter data based on selected time range
    const today = new Date();
    let startDate = new Date();

    if (timeRange === "week") {
      startDate.setDate(today.getDate() - 7);
    } else if (timeRange === "month") {
      startDate.setMonth(today.getMonth() - 1);
    } else {
      startDate.setFullYear(today.getFullYear() - 1);
    }

    const filteredData = MOCK_MOOD_DATA.filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate >= startDate && entryDate <= today;
    });

    setMoodData(filteredData);

    // In a real app, you'd fetch from Supabase here
    // Example:
    // const fetchMoodData = async () => {
    //   const { data, error } = await supabase
    //     .from('mood_entries')
    //     .select('*')
    //     .eq('user_id', user.id)
    //     .gte('date', startDate.toISOString().split('T')[0])
    //     .lte('date', today.toISOString().split('T')[0])
    //     .order('date', { ascending: true });
    //
    //   if (data) {
    //     setMoodData(data);
    //   }
    // };
    //
    // fetchMoodData();
  }, [timeRange]);

  // Prepare chart data
  const lineChartData = {
    labels: moodData.slice(-7).map((entry) => {
      const date = new Date(entry.date);
      return date
        .toLocaleDateString("en-US", { month: "short", day: "numeric" })
        .replace(" ", "\n");
    }),
    datasets: [
      {
        data: moodData.slice(-7).map((entry) => entry.mood),
        color: (opacity = 1) => `rgba(139, 92, 246, ${opacity})`, // Violet color
        strokeWidth: 2,
      },
    ],
  };

  // Calculate mood distribution
  const moodCounts = [0, 0, 0, 0, 0]; // Counts for moods 1-5
  moodData.forEach((entry) => {
    moodCounts[entry.mood - 1]++;
  });

  const moodDistributionData = {
    labels: ["Very Low", "Low", "Neutral", "Good", "Great"],
    datasets: [
      {
        data: moodCounts,
      },
    ],
  };

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

  const barChartConfig = {
    ...chartConfig,
    barPercentage: 0.8,
  };

  const moodEmojis = ["😞", "😔", "😐", "🙂", "😄"];

  // Calculate average mood
  const averageMood = moodData.length
    ? (
        moodData.reduce((sum, entry) => sum + entry.mood, 0) / moodData.length
      ).toFixed(1)
    : 0;

  // Get most common mood
  const mostCommonMoodIndex = moodCounts.indexOf(Math.max(...moodCounts));

  // Calculate mood improvement (trend)
  const calculateTrend = () => {
    if (moodData.length < 2) return 0;

    const firstHalf = moodData.slice(0, Math.floor(moodData.length / 2));
    const secondHalf = moodData.slice(Math.floor(moodData.length / 2));

    const firstHalfAvg =
      firstHalf.reduce((sum, entry) => sum + entry.mood, 0) / firstHalf.length;
    const secondHalfAvg =
      secondHalf.reduce((sum, entry) => sum + entry.mood, 0) /
      secondHalf.length;

    return (((secondHalfAvg - firstHalfAvg) / firstHalfAvg) * 100).toFixed(1);
  };

  const moodTrend = calculateTrend();

  return (
    <ScrollView className="flex-1 bg-white py-10">
      <View className="p-4">
        {/* Time Range Selector */}
        <View className="flex-row bg-gray-100 rounded-lg p-1 mb-6">
          <TouchableOpacity
            className={`flex-1 py-2 ${
              timeRange === "week" ? "bg-white rounded-md shadow" : ""
            }`}
            onPress={() => setTimeRange("week")}
          >
            <Text
              className={`text-center ${
                timeRange === "week"
                  ? "text-violet-700 font-medium"
                  : "text-gray-500"
              }`}
            >
              Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-2 ${
              timeRange === "month" ? "bg-white rounded-md shadow" : ""
            }`}
            onPress={() => setTimeRange("month")}
          >
            <Text
              className={`text-center ${
                timeRange === "month"
                  ? "text-violet-700 font-medium"
                  : "text-gray-500"
              }`}
            >
              Month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-2 ${
              timeRange === "year" ? "bg-white rounded-md shadow" : ""
            }`}
            onPress={() => setTimeRange("year")}
          >
            <Text
              className={`text-center ${
                timeRange === "year"
                  ? "text-violet-700 font-medium"
                  : "text-gray-500"
              }`}
            >
              Year
            </Text>
          </TouchableOpacity>
        </View>

        {/* Mood Stats Cards */}
        <View className="flex-row justify-between mb-6">
          <View
            className="bg-violet-50 rounded-xl p-4 items-center"
            style={{ width: "31%" }}
          >
            <Text className="text-violet-700 font-medium mb-1">Average</Text>
            <Text className="text-2xl font-bold text-gray-800">
              {averageMood}
            </Text>
          </View>

          <View
            className="bg-violet-50 rounded-xl p-4 items-center"
            style={{ width: "31%" }}
          >
            <Text className="text-violet-700 font-medium mb-1">
              Most Common
            </Text>
            <Text className="text-2xl">{moodEmojis[mostCommonMoodIndex]}</Text>
          </View>

          <View
            className="bg-violet-50 rounded-xl p-4 items-center"
            style={{ width: "31%" }}
          >
            <Text className="text-violet-700 font-medium mb-1">Trend</Text>
            <View className="flex-row items-center">
              {parseFloat(moodTrend) > 0 ? (
                <MaterialCommunityIcons
                  name="arrow-up"
                  size={16}
                  color="#10b981"
                />
              ) : parseFloat(moodTrend) < 0 ? (
                <MaterialCommunityIcons
                  name="arrow-down"
                  size={16}
                  color="#ef4444"
                />
              ) : (
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={16}
                  color="#6b7280"
                />
              )}
              <Text
                className={`text-lg font-bold ${
                  parseFloat(moodTrend) > 0
                    ? "text-green-500"
                    : parseFloat(moodTrend) < 0
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {Math.abs(parseFloat(moodTrend))}%
              </Text>
            </View>
          </View>
        </View>

        {/* Mood Trend Chart */}
        <View className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Mood Trend
          </Text>
          {moodData.length > 0 ? (
            <>
              <LineChart
                data={lineChartData}
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
            </>
          ) : (
            <View className="items-center py-8">
              <Text className="text-gray-500">
                No data available for this time range
              </Text>
            </View>
          )}
        </View>

        {/* Mood Distribution Chart */}
        <View className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Mood Distribution
          </Text>
          {moodData.length > 0 ? (
            <BarChart
              data={moodDistributionData}
              width={screenWidth - 40}
              height={180}
              chartConfig={barChartConfig}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              showValuesOnTopOfBars
            />
          ) : (
            <View className="items-center py-8">
              <Text className="text-gray-500">
                No data available for this time range
              </Text>
            </View>
          )}
        </View>

        {/* Mood Log */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Mood Log
          </Text>
          {moodData.length > 0 ? (
            moodData
              .slice()
              .reverse()
              .map((entry, index) => (
                <TouchableOpacity
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-4 mb-3 flex-row items-center"
                  onPress={() =>
                    router.push({
                      pathname: "/mood/journal",
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
              ))
          ) : (
            <View className="items-center py-8 bg-white rounded-xl shadow-sm">
              <Text className="text-gray-500">
                No entries for this time range
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
