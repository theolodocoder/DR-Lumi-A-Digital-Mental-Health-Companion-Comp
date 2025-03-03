// app/community/create-post.jsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function CreatePostScreen() {
  const [postContent, setPostContent] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [anonymousName, setAnonymousName] = useState("Anonymous Butterfly");

  const popularTags = [
    "stress",
    "anxiety",
    "depression",
    "academics",
    "selfcare",
    "gratitude",
    "motivation",
    "sleep",
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handlePost = () => {
    // Logic to submit post
    console.log({ postContent, selectedTags, anonymousName });
    router.back();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={28} color="#555" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">Create Post</Text>
        <TouchableOpacity
          onPress={handlePost}
          disabled={!postContent.trim()}
          className={`px-4 py-2 rounded-full ${
            postContent.trim() ? "bg-orange-500" : "bg-gray-300"
          }`}
        >
          <Text
            className={`font-medium ${
              postContent.trim() ? "text-white" : "text-gray-500"
            }`}
          >
            Post
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 p-4">
        {/* Anonymous Identity */}
        <View className="flex-row items-center mb-4 bg-gray-50 p-3 rounded-lg">
          <View className="w-10 h-10 rounded-full bg-orange-100 items-center justify-center">
            <Text className="text-orange-500 font-bold">
              {anonymousName.charAt(0)}
            </Text>
          </View>
          <View className="ml-2 flex-1">
            <Text className="font-medium text-gray-800">{anonymousName}</Text>
            <Text className="text-xs text-gray-500">
              Your identity is hidden
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="shuffle" size={20} color="#FF7D54" />
          </TouchableOpacity>
        </View>

        {/* Post Content */}
        <TextInput
          className="text-gray-800 text-base min-h-32 mb-4"
          placeholder="Share your thoughts anonymously..."
          placeholderTextColor="#999"
          multiline
          value={postContent}
          onChangeText={setPostContent}
          autoFocus
        />

        {/* Tags Section */}
        <Text className="font-medium text-gray-700 mb-2">Add tags</Text>
        <View className="flex-row flex-wrap mb-6">
          {popularTags.map((tag) => (
            <TouchableOpacity
              key={tag}
              onPress={() => toggleTag(tag)}
              className={`mr-2 mb-2 px-3 py-1 rounded-full border ${
                selectedTags.includes(tag)
                  ? "bg-orange-100 border-orange-300"
                  : "bg-gray-100 border-gray-200"
              }`}
            >
              <Text
                className={
                  selectedTags.includes(tag)
                    ? "text-orange-600"
                    : "text-gray-600"
                }
              >
                #{tag}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Attachment Options */}
        <View className="flex-row justify-around p-4 bg-gray-50 rounded-lg">
          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 rounded-full bg-green-100 items-center justify-center mb-1">
              <Ionicons name="image-outline" size={24} color="#22c55e" />
            </View>
            <Text className="text-xs text-gray-600">Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center mb-1">
              <Ionicons name="bar-chart-outline" size={24} color="#3b82f6" />
            </View>
            <Text className="text-xs text-gray-600">Poll</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 rounded-full bg-purple-100 items-center justify-center mb-1">
              <MaterialIcons name="emoji-emotions" size={24} color="#a855f7" />
            </View>
            <Text className="text-xs text-gray-600">Mood</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 rounded-full bg-amber-100 items-center justify-center mb-1">
              <Ionicons name="link-outline" size={24} color="#f59e0b" />
            </View>
            <Text className="text-xs text-gray-600">Resource</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
