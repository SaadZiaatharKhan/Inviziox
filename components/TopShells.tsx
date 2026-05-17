import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { icons } from "@/constants/icons";

/* ---------------- DATA ---------------- */

const shells = [
  {
    name: "Titan Vault",
    type: "High Cap",
    price: "$169,700",
    change: "+4.5%",
    color: "#ef4444",
    colors: ["#7f1d1d", "#ef4444"] as const,
    route: "high",
    shellRoute: "titan-vault",
    image: icons.redshell,
  },
  {
    name: "Atlas Core",
    type: "Mid Cap",
    price: "$142,000",
    change: "+2.1%",
    color: "#3b82f6",
    colors: ["#1e3a8a", "#3b82f6"] as const,
    route: "mid",
    shellRoute: "atlas-core",
    image: icons.guardianshell,
  },
  {
    name: "Guardian Base",
    type: "Low Cap",
    price: "$92,500",
    change: "-1.2%",
    color: "#10b981",
    colors: ["#064e3b", "#10b981"] as const,
    route: "low",
    shellRoute: "guardian-base",
    image: icons.greenshell,
  },
];

/* ---------------- COMPONENT ---------------- */

const TopShells = () => {
  const router = useRouter();

  return (
    <View className="mt-7">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 mb-3">
        <Text className="text-lg font-semibold text-white">
          Popular Shells
        </Text>

        <TouchableOpacity onPress={() => router.push("/portfolio")}>
          <Text className="text-sm text-text-secondary">
            See more
          </Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll */}
      <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ paddingHorizontal: 16 }}
>
  {shells.map((shell, index) => (
    <TouchableOpacity
      key={index}
      activeOpacity={0.85}
      onPress={() => router.push(`/shells/${shell.route}/${shell.shellRoute}`)}
      style={{
        marginRight: 16,
      }}
    >
      {/* Outer Card (Shadow Layer) */}
      <View
        style={{
          width: 230,
          height: 150,
          borderRadius: 28,
          backgroundColor: "#1f2937",
          padding: 3,
          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 10,
        }}
      >
        {/* Inner Gradient Card */}
        <LinearGradient
          colors={shell.colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            flex: 1,
            borderRadius: 25,
            padding: 14,
            justifyContent: "space-between",
          }}
        >
          {/* Top Row */}
          <View className="flex-row justify-between items-start">
            <Image
              source={shell.image}
              style={{ width: 36, height: 36 }}
              resizeMode="contain"
            />

            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 10,
              }}
            >
              <Text className="text-white text-[10px]">
                {shell.type}
              </Text>
            </View>
          </View>

          {/* Bottom Section */}
          <View>
            <Text className="text-white font-semibold text-[15px]">
              {shell.name}
            </Text>

            <View className="flex-row justify-between items-end mt-2">
              <Text className="text-white text-lg font-bold">
                {shell.price}
              </Text>

              <Text
                className="text-sm font-semibold"
                style={{
                  color:
                    shell.change[0] === "+"
                      ? "#bbf7d0"
                      : "#fecaca",
                }}
              >
                {shell.change}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  ))}
</ScrollView>
    </View>
  );
};

export default TopShells;
