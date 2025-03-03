// Grade Tracker Screen
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const GradeTrackerScreen = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      name: "Math Quiz",
      date: "03/01/2025",
      grade: "B+",
      color: "#4fc3f7",
    },
    {
      id: 2,
      name: "History Essay",
      date: "02/25/2025",
      grade: "A-",
      color: "#81c784",
    },
    {
      id: 3,
      name: "Chemistry Lab",
      date: "02/28/2025",
      grade: "C",
      color: "#ef5350",
    },
  ]);

  return (
    <ScrollView className="flex-1 bg-white py-10">
      <View className="px-6 pt-12 pb-6">
        {/* Header */}
        <Text className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Grade Tracker
        </Text>
        <Text className="text-base text-center text-gray-600 mb-8">
          Enter your recent assignment grades
        </Text>

        {/* Assignment List */}
        <View className="space-y-4 mb-6">
          {assignments.map((assignment) => (
            <View
              key={assignment.id}
              className="mb-5 bg-gray-50 p-4 rounded-lg border border-gray-200 flex-row justify-between items-center"
            >
              <View>
                <Text className="text-gray-800 text-base">
                  {assignment.name}
                </Text>
                <Text className="text-gray-500 text-sm">{assignment.date}</Text>
              </View>
              <View
                style={{ backgroundColor: assignment.color }}
                className="w-10 h-10 rounded-full items-center justify-center"
              >
                <Text className="text-white font-bold">{assignment.grade}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Add New Button */}
        <TouchableOpacity className="border border-gray-200 border-dashed bg-gray-50 rounded-lg p-4 items-center justify-center mb-8 h-14">
          <Text className="text-gray-500">+ Add new assignment</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("PerformanceInsights")}
          className="bg-[#6b4f38] py-5 px-6 rounded-full flex-row justify-center items-center"
        >
          <Text className="text-white text-center mr-2">Continue</Text>
          <Text className="text-white">→</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default GradeTrackerScreen;
