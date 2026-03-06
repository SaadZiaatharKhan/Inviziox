import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const About = () => {
  return (
    <View className="bg-pianoBlack flex-1 px-5 pt-16">
      <View className="flex-row items-center mb-8">
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => router.back()}
        />
        <Text className="text-white text-2xl font-bold ml-4">
          About
        </Text>
      </View>

      <View className="bg-[#111] rounded-2xl px-4 py-4">
        <Text className="text-gray-400">App Version</Text>
        <Text className="text-white text-lg mt-1">1.0.0</Text>
      </View>
    </View>
  );
};

export default About;
