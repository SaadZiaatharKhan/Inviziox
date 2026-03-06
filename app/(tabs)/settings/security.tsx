import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Security() {
  const Item = ({ title }: { title: string }) => (
    <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-800">
      <Text className="text-white text-base">{title}</Text>
      <Ionicons name="chevron-forward" size={20} color="#666" />
    </TouchableOpacity>
  );

  return (
    <View className="bg-pianoBlack flex-1 px-5 pt-16">
      <View className="flex-row items-center mb-8">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold ml-4">
          Security
        </Text>
      </View>

      <View className="bg-[#111] rounded-2xl px-4">
        <Item title="Change Password" />
        <Item title="Biometric Login" />
        <Item title="Two-Factor Authentication" />
      </View>
    </View>
  );
}
