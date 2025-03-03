// app/(app)/mood/check-in.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MoodCheckIn() {
  const router = useRouter();
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const [activities, setActivities] = useState([]);

  const moodOptions = [
    { value: 1, emoji: "😞", label: "Very Low" },
    { value: 2, emoji: "😔", label: "Low" },
    { value: 3, emoji: "😐", label: "Neutral" },
    { value: 4, emoji: "🙂", label: "Good" },
    { value: 5, emoji: "😄", label: "Great" },
  ];

  const activityOptions = [
    { id: 1, label: "Exercise", icon: "run" },
    { id: 2, label: "Study", icon: "book-open-variant" },
    { id: 3, label: "Social", icon: "account-group" },
    { id: 4, label: "Sleep", icon: "sleep" },
    { id: 5, label: "Hobby", icon: "palette" },
    { id: 6, label: "Meditation", icon: "meditation" },
  ];

  const toggleActivity = (id) => {
    if (activities.includes(id)) {
      setActivities(activities.filter((activityId) => activityId !== id));
    } else {
      setActivities([...activities, id]);
    }
  };

  const handleSubmit = () => {
    // In a real app, you'd save to Supabase here
    // Example:
    // const { data, error } = await supabase
    //   .from('mood_entries')
    //   .insert([
    //     {
    //       user_id: user.id,
    //       date: new Date().toISOString().split('T')[0],
    //       mood: selectedMood,
    //       activities: activities,
    //       note: note
    //     }
    //   ]);

    console.log({
      date: new Date().toISOString().split("T")[0],
      mood: selectedMood,
      activities: activities,
      note: note,
    });

    router.back();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white py-10"
    >
      <ScrollView className="flex-1 p-6">
        {/* Mood Selection */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            How are you feeling today?
          </Text>
          <View className="flex-row justify-between">
            {moodOptions.map((mood) => (
              <TouchableOpacity
                key={mood.value}
                className={`items-center p-3 rounded-lg ${
                  selectedMood === mood.value ? "bg-violet-100" : ""
                }`}
                onPress={() => setSelectedMood(mood.value)}
              >
                <Text className="text-3xl mb-1">{mood.emoji}</Text>
                <Text
                  className={`text-sm ${
                    selectedMood === mood.value
                      ? "text-violet-700 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {mood.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Activities */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            What did you do today?
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {activityOptions.map((activity) => (
              <TouchableOpacity
                key={activity.id}
                className={`items-center p-3 rounded-lg mb-4 w-1/3 ${
                  activities.includes(activity.id) ? "bg-violet-100" : ""
                }`}
                onPress={() => toggleActivity(activity.id)}
              >
                <MaterialCommunityIcons
                  name={activity.icon}
                  size={28}
                  color={
                    activities.includes(activity.id) ? "#8b5cf6" : "#6b7280"
                  }
                />
                <Text
                  className={`text-sm mt-1 ${
                    activities.includes(activity.id)
                      ? "text-violet-700 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {activity.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Journal Note */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            Add a note (optional)
          </Text>
          <TextInput
            className="bg-gray-50 p-4 rounded-xl text-gray-800 h-32"
            multiline
            placeholder="How was your day? Any thoughts you'd like to capture?"
            value={note}
            onChangeText={setNote}
            textAlignVertical="top"
          />
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View className="p-4 border-t border-gray-100">
        <TouchableOpacity
          className={`py-3 rounded-xl items-center ${
            selectedMood ? "bg-violet-500" : "bg-gray-300"
          }`}
          disabled={!selectedMood}
          onPress={handleSubmit}
        >
          <Text className="text-white font-bold text-lg">Save Entry</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
