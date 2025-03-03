// app/(app)/mood/journal.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function JournalEntry() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { date, mood } = params;

  const [journalEntry, setJournalEntry] = useState("");
  const [isEditing, setIsEditing] = useState(!date); // If no date is provided, we're creating a new entry

  const moodEmojis = ["😞", "😔", "😐", "🙂", "😄"];

  useEffect(() => {
    // In a real app, you'd fetch the journal entry from Supabase if it exists
    // Example:
    // if (date) {
    //   const fetchJournalEntry = async () => {
    //     const { data, error } = await supabase
    //       .from('mood_entries')
    //       .select('note')
    //       .eq('user_id', user.id)
    //       .eq('date', date)
    //       .single();
    //
    //     if (data) {
    //       setJournalEntry(data.note);
    //     }
    //   };
    //
    //   fetchJournalEntry();
    // }

    // For demo purposes
    if (date) {
      // Mock data - replace with actual data from your database
      const mockEntry =
        "Today was a productive day. I managed to finish my assignments ahead of schedule and even had time to go for a walk in the evening. I'm feeling optimistic about the upcoming exam.";
      setJournalEntry(mockEntry);
    }
  }, [date]);

  const handleSave = () => {
    // In a real app, you'd save to Supabase here
    // Example:
    // const { data, error } = await supabase
    //   .from('mood_entries')
    //   .update({ note: journalEntry })
    //   .eq('user_id', user.id)
    //   .eq('date', date);

    console.log("Saving journal entry:", journalEntry);
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    if (!dateString)
      return new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView className="flex-1 p-6">
        {/* Date and Mood Display */}
        <View className="mb-6 items-center">
          <Text className="text-lg text-gray-500">{formatDate(date)}</Text>
          {mood && (
            <Text className="text-5xl mt-2">
              {moodEmojis[parseInt(mood) - 1]}
            </Text>
          )}
        </View>

        {/* Journal Entry */}
        <View className="mb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-gray-800">
              Journal Entry
            </Text>
            {date && !isEditing && (
              <TouchableOpacity onPress={() => setIsEditing(true)}>
                <MaterialCommunityIcons
                  name="pencil"
                  size={24}
                  color="#8b5cf6"
                />
              </TouchableOpacity>
            )}
          </View>

          {isEditing ? (
            <TextInput
              className="bg-gray-50 p-4 rounded-xl text-gray-800 min-h-64"
              multiline
              placeholder="Write your thoughts here..."
              value={journalEntry}
              onChangeText={setJournalEntry}
              textAlignVertical="top"
              autoFocus
            />
          ) : (
            <View className="bg-gray-50 p-4 rounded-xl min-h-64">
              <Text className="text-gray-800 leading-6">
                {journalEntry || "No journal entry for this day."}
              </Text>
            </View>
          )}
        </View>

        {/* Prompts for Inspiration */}
        {isEditing && (
          <View className="mb-8">
            <Text className="text-lg font-medium text-gray-800 mb-3">
              Need inspiration?
            </Text>
            <TouchableOpacity
              className="bg-violet-50 p-3 rounded-lg mb-2"
              onPress={() =>
                setJournalEntry(
                  journalEntry +
                    "\n\nThree things I'm grateful for today:\n1. \n2. \n3. "
                )
              }
            >
              <Text className="text-violet-700">
                What are three things you're grateful for today?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-violet-50 p-3 rounded-lg mb-2"
              onPress={() =>
                setJournalEntry(
                  journalEntry +
                    "\n\nSomething that challenged me today and how I handled it: "
                )
              }
            >
              <Text className="text-violet-700">
                Did anything challenge you today?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-violet-50 p-3 rounded-lg"
              onPress={() =>
                setJournalEntry(
                  journalEntry +
                    "\n\nOne thing I'm looking forward to tomorrow: "
                )
              }
            >
              <Text className="text-violet-700">
                What are you looking forward to tomorrow?
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Save Button (only show when editing) */}
      {isEditing && (
        <View className="p-4 border-t border-gray-100">
          <TouchableOpacity
            className="bg-violet-500 py-3 rounded-xl items-center"
            onPress={handleSave}
          >
            <Text className="text-white font-bold text-lg">Save Journal</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
