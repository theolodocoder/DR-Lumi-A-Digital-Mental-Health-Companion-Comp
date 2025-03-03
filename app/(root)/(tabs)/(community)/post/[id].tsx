// app/community/post/[id].jsx
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const [comment, setComment] = useState("");

  // Mock data - in a real app, fetch this based on the id
  const post = {
    id,
    username: "Anonymous Butterfly",
    timeAgo: "2h ago",
    content:
      "Feeling overwhelmed with midterms coming up. Anyone else in the same boat? I've been trying different study techniques but nothing seems to be sticking. Any advice would be greatly appreciated!",
    likes: 24,
    tags: ["stress", "academics"],
    isVerified: true,
  };

  const comments = [
    {
      id: 1,
      username: "Anonymous Fox",
      timeAgo: "1h ago",
      content:
        "I'm in the same situation. What's helping me is breaking down my study sessions into 25-minute blocks with 5-minute breaks. Maybe give that a try?",
      likes: 8,
      isVerified: false,
    },
    {
      id: 2,
      username: "Anonymous Owl",
      timeAgo: "45m ago",
      content:
        "Have you tried the campus tutoring center? They helped me a lot during midterms last semester.",
      likes: 5,
      isVerified: true,
    },
    {
      id: 3,
      username: "Anonymous Deer",
      timeAgo: "20m ago",
      content:
        "Remember to take care of yourself too! Sleep, exercise, and proper meals make a huge difference in how well you can focus and retain information.",
      likes: 12,
      isVerified: true,
    },
  ];

  const handlePostComment = () => {
    console.log("Posting comment:", comment);
    setComment("");
    // Logic to post comment
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
      keyboardVerticalOffset={80}
    >
      <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <Ionicons name="arrow-back" size={24} color="#555" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">Post</Text>
      </View>

      <ScrollView className="flex-1">
        {/* Post */}
        <View className="p-4 border-b border-gray-100">
          {/* User info */}
          <View className="flex-row items-center mb-2">
            <View className="w-10 h-10 rounded-full bg-orange-100 items-center justify-center">
              <Text className="text-orange-500 font-bold">
                {post.username.charAt(0)}
              </Text>
            </View>
            <View className="ml-2">
              <View className="flex-row items-center">
                <Text className="font-medium text-gray-800">
                  {post.username}
                </Text>
                {post.isVerified && (
                  <Ionicons
                    name="checkmark-circle"
                    size={16}
                    color="#FF7D54"
                    style={{ marginLeft: 4 }}
                  />
                )}
              </View>
              <Text className="text-xs text-gray-500">{post.timeAgo}</Text>
            </View>
          </View>

          {/* Content */}
          <Text className="text-gray-800 mb-3 text-base leading-6">
            {post.content}
          </Text>

          {/* Tags */}
          <View className="flex-row mb-3">
            {post.tags.map((tag) => (
              <View
                key={tag}
                className="bg-gray-100 rounded-full px-3 py-1 mr-2"
              >
                <Text className="text-xs text-gray-600">#{tag}</Text>
              </View>
            ))}
          </View>

          {/* Actions */}
          <View className="flex-row justify-between border-t border-gray-100 pt-3 mt-2">
            <TouchableOpacity className="flex-row items-center">
              <Ionicons name="heart-outline" size={20} color="#666" />
              <Text className="ml-1 text-gray-600">{post.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Ionicons name="chatbubble-outline" size={20} color="#666" />
              <Text className="ml-1 text-gray-600">{comments.length}</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Ionicons name="share-social-outline" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="flag-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Comments */}
        <View className="px-4 py-2">
          <Text className="font-medium text-gray-700 mb-2">Comments</Text>

          {comments.map((comment) => (
            <View key={comment.id} className="mb-4 bg-gray-50 p-3 rounded-lg">
              <View className="flex-row items-center mb-1">
                <View className="w-8 h-8 rounded-full bg-orange-100 items-center justify-center">
                  <Text className="text-orange-500 font-bold">
                    {comment.username.charAt(0)}
                  </Text>
                </View>
                <View className="ml-2">
                  <View className="flex-row items-center">
                    <Text className="font-medium text-gray-800">
                      {comment.username}
                    </Text>
                    {comment.isVerified && (
                      <Ionicons
                        name="checkmark-circle"
                        size={14}
                        color="#FF7D54"
                        style={{ marginLeft: 4 }}
                      />
                    )}
                  </View>
                  <Text className="text-xs text-gray-500">
                    {comment.timeAgo}
                  </Text>
                </View>
              </View>

              <Text className="text-gray-800 ml-10">{comment.content}</Text>

              <View className="flex-row mt-2 ml-10">
                <TouchableOpacity className="flex-row items-center mr-4">
                  <Ionicons name="heart-outline" size={16} color="#666" />
                  <Text className="ml-1 text-xs text-gray-600">
                    {comment.likes}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                  <Ionicons name="chatbubble-outline" size={16} color="#666" />
                  <Text className="ml-1 text-xs text-gray-600">Reply</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Comment Input */}
      <View className="border-t border-gray-200 px-4 py-2 bg-white">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <View className="w-8 h-8 rounded-full bg-orange-100 items-center justify-center mr-2">
            <Text className="text-orange-500 font-bold">A</Text>
          </View>
          <TextInput
            className="flex-1 text-gray-800"
            placeholder="Add a comment as Anonymous..."
            placeholderTextColor="#999"
            value={comment}
            onChangeText={setComment}
          />
          <TouchableOpacity
            onPress={handlePostComment}
            disabled={!comment.trim()}
            className={`ml-2 ${!comment.trim() ? "opacity-50" : ""}`}
          >
            <Ionicons name="send" size={20} color="#FF7D54" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
