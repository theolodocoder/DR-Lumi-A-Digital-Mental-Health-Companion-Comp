// Study Tracker Screen
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

const StudyTrackerScreen = () => {
  const [studyHours, setStudyHours] = useState(3.5);
  const [selectedRating, setSelectedRating] = useState(2); // 0-3 for the 4 emotions
  const [notes, setNotes] = useState("");

  const incrementHours = () => {
    setStudyHours((prev) => Math.min(prev + 0.5, 12)); // Max 12 hours
  };

  const decrementHours = () => {
    setStudyHours((prev) => Math.max(prev - 0.5, 0)); // Min 0 hours
  };

  return (
    <ScrollView className="flex-1 bg-white py-10 ">
      <View className="px-6 pt-12 pb-6">
        {/* Header */}
        <Text className="text-4xl font-UrbanistExtraBold text-primary font-semibold text-center text-gray-800 mb-2">
          Study Tracker
        </Text>
        <Text className="text-base text-center text-gray-600 mb-8">
          How many hours did you study today?
        </Text>

        {/* Hour Counter */}
        <View className="flex-row items-center justify-center mb-10">
          <TouchableOpacity
            onPress={decrementHours}
            className="bg-gray-100 w-12 h-12 rounded-full items-center justify-center border border-gray-200"
          >
            <Text className="text-2xl text-gray-800">-</Text>
          </TouchableOpacity>

          <View className="mx-4 bg-gray-50 w-28 h-28 rounded-full items-center justify-center border border-gray-200">
            <Text className="text-3xl font-semibold text-gray-800">
              {studyHours.toFixed(1)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={incrementHours}
            className="bg-gray-100 w-12 h-12 rounded-full items-center justify-center border border-gray-200"
          >
            <Text className="text-2xl text-gray-800">+</Text>
          </TouchableOpacity>
        </View>

        {/* Study Quality */}
        <Text className="text-base text-center text-gray-600 mb-4">
          How productive was your study time?
        </Text>

        {/* Rating Emojis */}
        <View className="flex-row justify-center gap-x-5 mb-10">
          {["😞", "😐", "😊", "🤩"].map((emoji, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedRating(index)}
              className={`${
                selectedRating === index
                  ? "bg-green-400 border-green-500"
                  : "bg-gray-50 border-gray-200"
              }
                          w-16 h-16 rounded-full items-center justify-center border-2`}
            >
              <Text className="text-lg">{emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Notes Section */}
        <TextInput
          className="bg-gray-50 p-4 border border-gray-200 rounded-lg mb-8 h-24 font-UrbanistBold text-xl"
          placeholder="Add notes about your study session..."
          multiline
          value={notes}
          onChangeText={setNotes}
        />

        {/* Continue Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("GradeTracker")}
          className="bg-primary font-UrbanistBold py-5 px-6 rounded-full flex-row justify-center items-center"
        >
          <Text className="text-white text-center mr-2">Continue</Text>
          <Text className="text-white">→</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default StudyTrackerScreen;
