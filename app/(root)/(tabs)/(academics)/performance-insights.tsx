// Performance Insights Screen
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Svg, { Path, Line, Circle } from "react-native-svg";

const PerformanceInsightsScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white py-10">
      <View className="px-6 pt-12 pb-6">
        {/* Header */}
        <Text className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Performance Insights
        </Text>
        <Text className="text-base text-center text-gray-600 mb-8">
          Your mood and academic correlation
        </Text>

        {/* Graph Card */}
        <View className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
          <View className="h-40">
            <Svg height="100%" width="100%" viewBox="0 0 180 100">
              {/* X and Y axis */}
              <Line
                x1="10"
                y1="90"
                x2="170"
                y2="90"
                stroke="#ccc"
                strokeWidth="1"
              />
              <Line
                x1="10"
                y1="90"
                x2="10"
                y2="10"
                stroke="#ccc"
                strokeWidth="1"
              />

              {/* Mood line */}
              <Path
                d="M10,60 Q30,30 50,50 Q70,70 90,20 Q110,40 130,10 Q150,20 170,30"
                fill="none"
                stroke="#f06292"
                strokeWidth="2"
              />
              <Circle cx="50" cy="50" r="3" fill="#f06292" />
              <Circle cx="90" cy="20" r="3" fill="#f06292" />
              <Circle cx="130" cy="10" r="3" fill="#f06292" />
              <Circle cx="170" cy="30" r="3" fill="#f06292" />

              {/* Grades line */}
              <Path
                d="M10,50 Q30,40 50,30 Q70,40 90,10 Q110,30 130,10 Q150,50 170,10"
                fill="none"
                stroke="#64b5f6"
                strokeWidth="2"
              />
              <Circle cx="50" cy="30" r="3" fill="#64b5f6" />
              <Circle cx="90" cy="10" r="3" fill="#64b5f6" />
              <Circle cx="130" cy="10" r="3" fill="#64b5f6" />
              <Circle cx="170" cy="10" r="3" fill="#64b5f6" />
            </Svg>
          </View>

          {/* Legend */}
          <View className="flex-row mt-2 px-2">
            <View className="flex-row items-center mr-4">
              <View className="w-3 h-3 rounded-full bg-pink-400 mr-1" />
              <Text className="text-gray-600 text-xs">Mood</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-3 h-3 rounded-full bg-blue-400 mr-1" />
              <Text className="text-gray-600 text-xs">Grades</Text>
            </View>
          </View>
        </View>

        {/* Correlation Stats */}
        <View className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
          <Text className="text-gray-800 text-lg mb-2">
            🔍 Correlation Analysis
          </Text>
          <Text className="text-gray-600">
            We've detected a 72% correlation
          </Text>
          <Text className="text-gray-600">between your mood and grades.</Text>
        </View>

        {/* Recommendations */}
        <View className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
          <Text className="text-blue-800 text-lg mb-2">💡 Suggestion</Text>
          <Text className="text-blue-700">
            Try studying in the morning when
          </Text>
          <Text className="text-blue-700">your mood is typically better.</Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("AcademicImpact")}
          className="bg-[#6b4f38] py-5 px-6 rounded-full flex-row justify-center items-center"
        >
          <Text className="text-white text-center mr-2">Continue</Text>
          <Text className="text-white">→</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PerformanceInsightsScreen;
