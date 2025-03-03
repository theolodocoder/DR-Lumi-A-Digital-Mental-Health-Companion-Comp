import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <ScrollView className="flex-1 pt-2">
            {/* Mental Health Metrics */}
            <View className="px-4 mt-2">
              <View className="flex-row justify-between items-center">
                <Text className="text-base font-semibold">
                  Mental Health Metrics
                </Text>
                <Pressable>
                  <Text className="text-green-600 text-sm">Learn more</Text>
                </Pressable>
              </View>
              <View className="flex-row mt-3 space-x-3">
                {/* Mental Health Score */}
                <View className="flex-1 bg-white p-4 rounded-xl shadow-sm">
                  <LinearGradient
                    colors={["#E8F5E9", "#C8E6C9"]}
                    className="rounded-full h-20 w-20 items-center justify-center self-center"
                  >
                    <Text className="text-xl font-bold text-green-600">80</Text>
                    <Text className="text-xs text-green-700">great</Text>
                  </LinearGradient>
                  <Text className="text-center mt-2 text-sm font-medium">
                    Mental Health
                  </Text>
                </View>
                {/* Mood Graph */}
                <View className="flex-1 bg-orange-200 p-4 rounded-xl shadow-sm">
                  <Text className="text-white font-medium">Mood</Text>
                  <View className="h-16 justify-end flex-row items-end space-x-1">
                    {[0.3, 0.5, 0.7, 0.4, 0.6, 0.8, 0.9].map(
                      (height, index) => (
                        <View
                          key={index}
                          style={{ height: `${height * 100}%` }}
                          className="bg-white w-3 rounded-sm opacity-80"
                        />
                      )
                    )}
                  </View>
                </View>
              </View>
            </View>
            {/* Mindful Tracker */}
            <View className="px-4 mt-5">
              <View className="flex-row justify-between items-center">
                <Text className="text-base font-semibold">Mindful Tracker</Text>
              </View>
              <View className="mt-3 bg-white p-4 rounded-xl shadow-sm">
                <View className="flex-row justify-between items-center">
                  <Text className="text-base text-gray-700">Meditation</Text>
                  <Text className="text-sm text-gray-500">2 hrs/day</Text>
                </View>
                <View className="mt-2 h-2 bg-gray-200 rounded-full">
                  <View className="h-2 bg-green-500 rounded-full w-3/4" />
                </View>
              </View>
            </View>
            {/* Sleep Quality */}
            <View className="px-4 mt-5">
              <View className="bg-white p-4 rounded-xl shadow-sm">
                <View className="flex-row justify-between items-center">
                  <Text className="text-base text-gray-700">Sleep Quality</Text>
                  <Text className="text-sm text-gray-500">7h 20m/8h</Text>
                </View>
                <View className="mt-3 flex-row justify-between">
                  <View className="flex-1">
                    <Text className="text-xs text-gray-500">Performance</Text>
                    <Text className="text-base font-medium">92% Good</Text>
                  </View>
                  <View className="w-16 h-16">
                    <Ionicons name="moon" size={24} color="#6200EA" />
                  </View>
                </View>
              </View>
            </View>
            {/* Mindful Journal */}
            <View className="px-4 mt-5">
              <View className="bg-white p-4 rounded-xl shadow-sm">
                <View className="flex-row justify-between items-center">
                  <Text className="text-base text-gray-700">
                    Mindful Journal
                  </Text>
                  <Text className="text-sm text-gray-500">All Time Streak</Text>
                </View>
                <View className="mt-2 flex-row">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <View key={day} className="flex-1 items-center">
                      <View
                        className={`h-3 w-3 rounded-full ${
                          day < 6 ? "bg-orange-500" : "bg-gray-300"
                        }`}
                      />
                      <View className="h-px w-full bg-gray-300 my-1" />
                      <Text className="text-xs text-gray-500">{day}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
            {/* Stress Level */}
            <View className="px-4 mt-5">
              <View className="bg-white p-4 rounded-xl shadow-sm">
                <Text className="text-base text-gray-700">Stress Level</Text>
                <View className="mt-2 flex-row items-center">
                  <Text className="text-sm text-gray-500">Level:</Text>
                  <Text className="ml-1 text-orange-500 font-medium">
                    3 (Normal)
                  </Text>
                </View>
              </View>
            </View>
            {/* Mood Tracker */}
            <View className="px-4 mt-5">
              <View className="bg-white p-4 rounded-xl shadow-sm">
                <Text className="text-base text-gray-700">Mood Tracker</Text>
                <View className="mt-2 flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="sad-outline" size={20} color="#9E9E9E" />
                    <View className="h-1 bg-gray-300 w-24 mx-2 rounded-full">
                      <View
                        className="h-1 bg-green-500 rounded-full"
                        style={{ width: "70%" }}
                      />
                    </View>
                    <Ionicons name="happy-outline" size={20} color="#8BC34A" />
                  </View>
                  <Text className="text-sm text-gray-500">
                    Last entry 4:33pm
                  </Text>
                </View>
              </View>
            </View>
            {/* AI Therapy Chatbot */}
            <View className="px-4 mt-5">
              <View className="bg-brown-800 p-4 rounded-xl shadow-sm">
                <View className="flex-row justify-between">
                  <Text className="text-white text-lg font-semibold">
                    AI Therapy Chatbot
                  </Text>
                  <View className="flex-row items-center">
                    <View className="h-2 w-2 rounded-full bg-green-500 mr-1" />
                    <Text className="text-xs text-white">Online</Text>
                  </View>
                </View>
                <View className="mt-4">
                  <Text className="text-white text-3xl font-bold">2541</Text>
                  <Text className="text-white text-sm mt-1">Conversations</Text>
                  <Text className="text-white text-xs mt-3">
                    35 chats this month
                  </Text>
                </View>
                <View className="flex-row justify-around mt-4">
                  <Pressable className="bg-green-500 h-12 w-12 rounded-full items-center justify-center">
                    <Ionicons
                      name="chatbubble-outline"
                      size={24}
                      color="white"
                    />
                  </Pressable>
                  <Pressable className="bg-orange-500 h-12 w-12 rounded-full items-center justify-center">
                    <Ionicons name="call-outline" size={24} color="white" />
                  </Pressable>
                </View>
              </View>
            </View>
            {/* Mindful Articles */}
            <View className="px-4 mt-5 mb-8">
              <View className="flex-row justify-between items-center">
                <Text className="text-base font-semibold">
                  Mindful Articles
                </Text>
                <Pressable>
                  <Text className="text-sm text-gray-500">See All</Text>
                </Pressable>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mt-3"
              >
                {[1, 2].map((item) => (
                  <Pressable
                    key={item}
                    className="mr-4 bg-white rounded-xl shadow-sm overflow-hidden"
                    style={{ width: 200 }}
                  >
                    <View className="h-24 bg-green-200" />
                    <View className="p-3">
                      <Text className="text-sm font-medium" numberOfLines={2}>
                        {item === 1
                          ? "How meditation helps you control the mind"
                          : "Self meditation techniques for beginners"}
                      </Text>
                      <View className="flex-row items-center mt-2">
                        <Ionicons
                          name="time-outline"
                          size={12}
                          color="#9E9E9E"
                        />
                        <Text className="text-xs text-gray-500 ml-1">
                          5 min read
                        </Text>
                        <View className="h-4 w-px bg-gray-300 mx-2" />
                        <Ionicons
                          name="eye-outline"
                          size={12}
                          color="#9E9E9E"
                        />
                        <Text className="text-xs text-gray-500 ml-1">
                          10.4k views
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
              {/* Add Button */}
              <View className="items-center mt-8">
                <Pressable
                  className="bg-green-500 h-14 w-14 rounded-full items-center justify-center"
                  onPress={() => router.push("/(root)/(tabs)/(mood)/mood")}
                >
                  <Ionicons name="add" size={30} color="white" />
                </Pressable>
              </View>
            </View>
          </ScrollView>
        );
      case "Community":
        return (
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold">Community Content</Text>
          </View>
        );
      case "Insights":
        return (
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold">Insights Content</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-4 pt-12 pb-4 bg-white">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <Text className="text-xs text-gray-600">The</Text>
            </View>
            <Text className="ml-2 text-gray-700 font-medium">The Zen Mind</Text>
          </View>
          <Pressable>
            <Ionicons name="notifications-outline" size={24} color="#666" />
          </Pressable>
        </View>
        <View className="mt-6 flex-row items-center">
          <Image
            source={{ uri: "https://via.placeholder.com/40" }}
            className="w-10 h-10 rounded-full"
          />
          <View className="ml-3">
            <Text className="text-lg font-semibold">Hi, Promise!</Text>
            <View className="flex-row items-center">
              <View className="h-2 w-2 rounded-full bg-green-500 mr-1" />
              <Text className="text-xs text-gray-500 mr-2">
                I'm feeling good
              </Text>
              <Text className="text-xs text-yellow-500">• Happy</Text>
            </View>
          </View>
        </View>
        {/* Search Bar */}
        <View className="mt-4 flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <Ionicons name="search" size={20} color="#9E9E9E" />
          <Text className="ml-2 text-gray-500">Search anything...</Text>
        </View>
      </View>
      {renderContent()}
      {/* Bottom Tabs */}
      <View className="flex-row justify-around bg-white py-2 border-t border-gray-200">
        {["Dashboard", "Community", "Insights"].map((tab) => (
          <Pressable
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab ? "bg-green-500" : "bg-gray-200"
            }`}
          >
            <Text
              className={`text-sm font-medium ${
                activeTab === tab ? "text-white" : "text-gray-700"
              }`}
            >
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
