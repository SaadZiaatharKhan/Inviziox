import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Notifications = () => {
  const [enabled, setEnabled] = useState(true);

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
          Notifications
        </Text>
      </View>

      <View className="bg-[#111] rounded-2xl px-4 py-4 flex-row justify-between items-center">
        <Text className="text-white text-base">
          Push Notifications
        </Text>
        <Switch value={enabled} onValueChange={setEnabled} />
      </View>
    </View>
  );
};

export default Notifications;
