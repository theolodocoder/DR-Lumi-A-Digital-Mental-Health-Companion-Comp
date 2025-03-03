// app/community/notifications.jsx
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function NotificationsScreen() {
  const notifications = [
    {
      id: 1,
      type: "like",
      username: "Anonymous Fox",
      content: "liked your post",
      postPreview: "Feeling overwhelmed with midterms...",
      timeAgo: "2m ago",
      read: false,
    },
    {
      id: 2,
      type: "comment",
      username: "Anonymous Owl",
      content: "commented on your post",
      postPreview: "Have you tried the campus tutoring center?",
      timeAgo: "15m ago",
      read: false,
    },
    {
      id: 3,
      type: "mention",
      username: "Anonymous Deer",
      content: "mentioned you in a comment",
      postPreview: "@AnonymousButterfly I think this might help you...",
      timeAgo: "1h ago",
      read: true,
    },
    {
      id: 4,
      type: "trending",
      content: "Your post is trending in Academics",
      postPreview: "Feeling overwhelmed with midterms...",
      timeAgo: "2h ago",
      read: true,
    },
  ];

  const getIconForType = (type) => {
    switch (type) {
      case "like":
        return <Ionicons name="heart" size={22} color="#FF7D54" />;
      case "comment":
        return <Ionicons name="chatbubble" size={22} color="#3b82f6" />;
      case "mention":
        return <Ionicons name="at" size={22} color="#a855f7" />;
      case "trending":
        return <Ionicons name="trending-up" size={22} color="#f59e0b" />;
      default:
        return <Ionicons name="notifications" size={22} color="#888" />;
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <Ionicons name="arrow-back" size={24} color="#555" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">Notifications</Text>
        <TouchableOpacity>
          <Text className="text-orange-500 font-medium">Mark all as read</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {notifications.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            className={`p-4 border-b border-gray-100 ${
              !notification.read ? "bg-orange-50" : "bg-white"
            }`}
            onPress={() => {
              /* Navigate based on notification type */
            }}
          >
            <View className="flex-row">
              <View className="mr-3 mt-1">
                {getIconForType(notification.type)}
              </View>
              <View className="flex-1">
                <View className="flex-row items-center mb-1">
                  {notification.username && (
                    <Text className="font-medium text-gray-800 mr-1">
                      {notification.username}
                    </Text>
                  )}
                  <Text className="text-gray-600">{notification.content}</Text>
                </View>
                <Text className="text-gray-500 text-sm mb-1">
                  {notification.postPreview}
                </Text>
                <Text className="text-gray-400 text-xs">
                  {notification.timeAgo}
                </Text>
              </View>
              {!notification.read && (
                <View className="w-2 h-2 rounded-full bg-orange-500" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
