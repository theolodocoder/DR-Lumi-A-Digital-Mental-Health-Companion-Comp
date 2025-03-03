// app/community/index.jsx
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function CommunityScreen() {
  const [activeTab, setActiveTab] = useState("all");

  const communityPosts = [
    {
      id: 1,
      username: "Anonymous Butterfly",
      timeAgo: "2h ago",
      content:
        "Feeling overwhelmed with midterms coming up. Anyone else in the same boat?",
      likes: 24,
      comments: 8,
      tags: ["stress", "academics"],
      isVerified: true,
    },
    {
      id: 2,
      username: "Anonymous Fox",
      timeAgo: "4h ago",
      content:
        "Found a great study method that's helping with my anxiety. Happy to share if anyone's interested!",
      likes: 42,
      comments: 15,
      tags: ["anxiety", "studytips"],
      isVerified: false,
    },
    {
      id: 3,
      username: "Anonymous Owl",
      timeAgo: "1d ago",
      content:
        "Just wanted to say I'm proud of everyone here for prioritizing their mental health. It's not easy being a student these days.",
      likes: 87,
      comments: 12,
      tags: ["support", "gratitude"],
      isVerified: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "trending", name: "Trending" },
    { id: "stress", name: "Stress" },
    { id: "anxiety", name: "Anxiety" },
    { id: "depression", name: "Depression" },
    { id: "wellness", name: "Wellness" },
  ];

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-2 pb-3 border-b border-gray-100">
        <View className="flex-row items-center">
          <MaterialCommunityIcons
            name="puzzle-heart"
            size={28}
            color="#FF7D54"
          />
          <Text className="text-xl font-bold ml-2 text-gray-800">
            Community
          </Text>
        </View>
        <View className="flex-row">
          <TouchableOpacity className="mr-4">
            <Ionicons name="search" size={24} color="#555" />
          </TouchableOpacity>
          <Link href="/community/notifications" asChild>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="#555" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-3 border-b border-gray-100"
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => setActiveTab(category.id)}
            className={`mx-2 px-4 py-2 rounded-full ${
              activeTab === category.id ? "bg-orange-100" : "bg-gray-100"
            }`}
          >
            <Text
              className={`${
                activeTab === category.id
                  ? "text-orange-500 font-medium"
                  : "text-gray-600"
              }`}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Create Post Button */}
      <Link href="/community/create-post" asChild>
        <TouchableOpacity className="absolute bottom-4 right-4 z-10 bg-orange-500 w-14 h-14 rounded-full items-center justify-center shadow-md">
          <Ionicons name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </Link>

      {/* Posts */}
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {communityPosts.map((post) => (
          <TouchableOpacity
            key={post.id}
            className="p-4 border-b border-gray-100"
            onPress={() => {
              /* Navigate to post detail */
            }}
          >
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
            <Text className="text-gray-800 mb-3">{post.content}</Text>

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
            <View className="flex-row justify-between">
              <TouchableOpacity className="flex-row items-center">
                <Ionicons name="heart-outline" size={20} color="#666" />
                <Text className="ml-1 text-gray-600">{post.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center">
                <Ionicons name="chatbubble-outline" size={20} color="#666" />
                <Text className="ml-1 text-gray-600">{post.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center">
                <Ionicons name="share-social-outline" size={20} color="#666" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="bookmark-outline" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
