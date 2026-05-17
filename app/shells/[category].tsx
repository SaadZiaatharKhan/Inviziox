import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { icons } from "@/constants/icons";
import { shellsData } from "@/constants/shellsData";

/* ---------------- SHELL CONFIG ---------------- */

const shellConfig: any = {
  high: {
    title: "Titan Shell",
    subTitle: "High Risk • High Reward",
    background: ["#2a0a0a", "#18181a"],
    accent: "#ef4444",
    titleColor: "#f87171",
    icon: icons.redshell,
  },
  mid: {
    title: "Atlas Shell",
    subTitle: "Medium Risk • Balanced",
    background: ["#0f172a", "#18181a"],
    accent: "#3b82f6",
    titleColor: "#60a5fa",
    icon: icons.guardianshell,
  },
  low: {
    title: "Guardian Shell",
    subTitle: "Low Risk • Stable",
    background: ["#052e2b", "#18181a"],
    accent: "#10b981",
    titleColor: "#34d399",
    icon: icons.greenshell,
  },
};

/* ---------------- SCREEN ---------------- */

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();
  const router = useRouter();

  const categoryKey = category as keyof typeof shellsData;
  const config = shellConfig[categoryKey] || shellConfig.high;
  const data = shellsData[categoryKey] || shellsData.high;

  return (
    <LinearGradient
      colors={config.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView className="px-5 pt-14">
        {/* HEADER */}
        <View className="mb-10">
          <Text
            style={{ color: config.titleColor }}
            className="text-3xl font-bold"
          >
            {config.title}
          </Text>
        </View>

        {/* MAIN SHELL CARD */}
        <View
          style={[
            styles.mainCard,
            { borderColor: config.accent },
          ]}
        >
          <Image
            source={config.icon}
            style={styles.mainImage}
            resizeMode="contain"
          />

          <View>
            <Text className="text-white text-xl font-bold">
              {config.title}
            </Text>
            <Text className="text-white/70 text-[12px] mt-1">
              {config.subTitle}
            </Text>
          </View>
        </View>

        {/* SUB SHELL CARDS */}
        <View className="mt-8">
          {Object.entries(data).map(([shell, item]) => {
            const positive = item.percent.includes("+");

            return (
              <TouchableOpacity
                key={shell}
                onPress={() =>
                  router.push(`/shells/${categoryKey}/${shell}`)
                }
                style={[
                  styles.subCard,
                  { borderColor: config.accent },
                ]}
              >
                <View className="flex-row items-center">
                  <Image
                    source={config.icon}
                    style={styles.subIcon}
                    resizeMode="contain"
                  />
                  <Text className="text-white font-semibold ml-3">
                    {item.name}
                  </Text>
                </View>

                <View className="items-end">
                  <Text className="text-white font-bold text-lg">
                    {item.value}
                  </Text>
                  <Text
                    className={`text-sm font-semibold ${
                      positive
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.percent}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View className="h-32" />
      </ScrollView>
    </LinearGradient>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  mainCard: {
    height: 140,
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1f23",
    borderWidth: 1.5,
    marginBottom: 20,
  },
  mainImage: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
  subCard: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    backgroundColor: "#1c1c20",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subIcon: {
    width: 36,
    height: 36,
  },
});
