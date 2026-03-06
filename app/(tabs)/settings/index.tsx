import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { icons } from "@/constants/icons";

export default function Settings() {
  const MenuItem = ({
    title,
    icon,
    route,
  }: {
    title: string;
    icon: string;
    route: string;
  }) => (
    <TouchableOpacity
      onPress={() => router.push(route)}
      className="flex-row items-center justify-between py-4 border-b border-gray-800"
    >
      <View className="flex-row items-center gap-3">
        <Ionicons name={icon as any} size={22} color="#aaa" />
        <Text className="text-white text-base">{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#666" />
    </TouchableOpacity>
  );

  return (
    <ScrollView className="bg-pianoBlack flex-1 px-5 pt-16">
      <Text className="text-white text-3xl font-bold mb-8">
        Settings
      </Text>

      <View className="flex-row items-center mb-10">
        <Image
                            source={icons.user}
                            className="w-20 h-20 rounded-full"
                            resizeMode="contain"
                          />

        <View className="ml-4">
          <Text className="text-white text-lg font-semibold">
            Saad Khan
          </Text>
          <Text className="text-gray-400">
            saad@email.com
          </Text>
          <Text className="text-gray-500 text-sm">
            Premium Member
          </Text>
        </View>
      </View>

      <View className="bg-[#111] rounded-2xl px-4">
        <MenuItem
          title="Security"
          icon="lock-closed-outline"
          route="/(tabs)/settings/security"
        />

        <MenuItem
          title="Notifications"
          icon="notifications-outline"
          route="/(tabs)/settings/notifications"
        />

        <MenuItem
          title="About"
          icon="information-circle-outline"
          route="/(tabs)/settings/about"
        />
      </View>
    </ScrollView>
  );
}
