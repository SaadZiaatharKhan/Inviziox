import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

/* ---------------- SHELL LOGIC ---------------- */

const getShell = (score: number) => {
  if (score <= 8)
    return {
      name: "Capital Shield",
      color: "#10b981",
      bg: "#064e3b",
      risk: "Low Risk",
      desc: "Safe & stable. Ideal for capital protection.",
    };

  if (score <= 13)
    return {
      name: "Momentum Core",
      color: "#3b82f6",
      bg: "#1e3a8a",
      risk: "Medium Risk",
      desc: "Balanced growth with controlled risk.",
    };

  if (score <= 18)
    return {
      name: "Growth Titan",
      color: "#f59e0b",
      bg: "#78350f",
      risk: "Medium-High Risk",
      desc: "Aggressive growth with smart rebalancing.",
    };

  return {
    name: "Aggressive Alpha",
    color: "#ef4444",
    bg: "#7f1d1d",
    risk: "High Risk",
    desc: "Maximum returns with high volatility.",
  };
};

/* ---------------- MAIN ---------------- */

const Result = () => {
  const { score } = useLocalSearchParams();
  const result = getShell(Number(score));

  return (
    <SafeAreaView className="flex-1 bg-pianoBlack px-5">

      {/* HEADER */}
      <View className="mt-6 mb-8">
        <Text className="text-gray-400 text-sm">
          Your Personalized Result
        </Text>
        <Text className="text-white text-3xl font-bold mt-1">
          Your Shell
        </Text>
      </View>

      {/* RESULT CARD */}
      <View
        style={{
          backgroundColor: result.bg,
          shadowColor: result.color,
          shadowOpacity: 0.5,
          shadowRadius: 25,
          shadowOffset: { width: 0, height: 10 },
          elevation: 15,
        }}
        className="rounded-3xl p-6"
      >
        {/* Risk Badge */}
        <View
          style={{ backgroundColor: result.color }}
          className="self-start px-3 py-1 rounded-full mb-4"
        >
          <Text className="text-white text-xs font-semibold">
            {result.risk}
          </Text>
        </View>

        {/* Name */}
        <Text className="text-white text-2xl font-bold">
          {result.name}
        </Text>

        {/* Score */}
        <Text className="text-gray-300 mt-2">
          Score: {score}
        </Text>

        {/* Description */}
        <Text className="text-gray-300 mt-4 leading-5">
          {result.desc}
        </Text>

        {/* Divider */}
        <View className="h-[1px] bg-white/10 my-5" />

        {/* Stats (Inspired by PDF) */}
        <View className="flex-row justify-between">
          <View>
            <Text className="text-gray-400 text-xs">
              Safety
            </Text>
            <Text className="text-white font-semibold">
              {result.name === "Capital Shield"
                ? "95%"
                : result.name === "Momentum Core"
                ? "70%"
                : result.name === "Growth Titan"
                ? "55%"
                : "35%"}
            </Text>
          </View>

          <View>
            <Text className="text-gray-400 text-xs">
              Growth
            </Text>
            <Text className="text-white font-semibold">
              {result.name === "Capital Shield"
                ? "25%"
                : result.name === "Momentum Core"
                ? "60%"
                : result.name === "Growth Titan"
                ? "78%"
                : "95%"}
            </Text>
          </View>

          <View>
            <Text className="text-gray-400 text-xs">
              Volatility
            </Text>
            <Text className="text-white font-semibold">
              {result.name === "Capital Shield"
                ? "15%"
                : result.name === "Momentum Core"
                ? "45%"
                : result.name === "Growth Titan"
                ? "65%"
                : "90%"}
            </Text>
          </View>
        </View>
      </View>

      {/* CTA */}
      <View className="absolute bottom-8 left-0 right-0 px-5">
        <TouchableOpacity
          onPress={() => router.replace("/(tabs)/home")}
          className="bg-white py-4 rounded-xl"
        >
          <Text className="text-center text-black font-bold">
            Continue to Dashboard
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default Result;