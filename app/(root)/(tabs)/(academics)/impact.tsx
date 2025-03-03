// Academic Impact Detail Screen
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const AcademicImpactScreen = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const moods = ["😊", "😐", "😊", "😞", "😊"];
  const grades = ["A", "B", "A-", "C+", "A"];
  const colors = ["#81c784", "#ffb74d", "#4fc3f7", "#e57373", "#81c784"];
  const hours = ["3h", "2h", "4h", "1h", "3h"];

  return (
    <ScrollView className="flex-1 bg-white py-10">
      <View className="px-6 pt-12 pb-6">
        {/* Header */}
        <Text className="text-5xl text-primary font-UrbanistExtraBold font-semibold text-center text-gray-800 mb-2">
          Academic Impact
        </Text>
        <Text className="text-base font-UrbanistBold text-center text-gray-600 mb-8">
          How your mental health affects performance
        </Text>

        {/* Weekly Breakdown Card */}
        <View className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
          {/* Week days */}
          <View className="flex-row justify-between mb-4">
            {days.map((day, index) => (
              <Text key={index} className="text-gray-600 text-center w-12">
                {day}
              </Text>
            ))}
          </View>

          {/* Mood indicators */}
          <View className="flex-row justify-between mb-4">
            {moods.map((mood, index) => (
              <View
                key={index}
                style={{ backgroundColor: colors[index] }}
                className="w-10 h-10 rounded-full items-center justify-center"
              >
                <Text className="text-white">{mood}</Text>
              </View>
            ))}
          </View>

          {/* Grade indicators */}
          <View className="flex-row justify-between mb-4">
            {grades.map((grade, index) => (
              <View
                key={index}
                style={{ backgroundColor: colors[index] }}
                className="w-10 h-10 rounded-lg items-center justify-center"
              >
                <Text className="text-white font-bold">{grade}</Text>
              </View>
            ))}
          </View>

          {/* Study hours */}
          <View className="flex-row justify-between mb-4">
            {hours.map((hour, index) => (
              <Text key={index} className="text-gray-600 text-center w-12">
                {hour}
              </Text>
            ))}
          </View>

          {/* Legend */}
          <Text className="text-gray-600 text-xs mb-1">
            🟢 Mood 🟦 Grade 💭 Study Hours
          </Text>
          <Text className="text-gray-600 text-xs">
            Tap day for detailed view
          </Text>
        </View>

        {/* Insight Card */}
        <View className="bg-green-50 p-4 rounded-lg border border-green-100 mb-8">
          <Text className="text-green-800 text-lg mb-2">📊 Key Insight</Text>
          <Text className="text-green-700">
            On days when you study 3+ hours
          </Text>
          <Text className="text-green-700">and have positive mood, your</Text>
          <Text className="text-green-700">grades improve by 35%.</Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity className="py-5 bg-primary px-6 rounded-full flex-row justify-center items-center">
          <Text className="text-white text-center mr-2">Continue</Text>
          <Text className="text-white">→</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AcademicImpactScreen;
