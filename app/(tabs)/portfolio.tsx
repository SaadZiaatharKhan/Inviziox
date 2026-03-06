import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Svg, { Polyline } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { icons } from "@/constants/icons";

const { width } = Dimensions.get("window");

/* ---------------- GRAPH DATA ---------------- */

const graphData: any = {
  overall: [10, 20, 15, 30, 25, 40, 45],
  high: [20, 25, 18, 35, 40, 45, 60],
  mid: [15, 18, 22, 28, 26, 30, 32],
  low: [30, 28, 26, 24, 22, 20, 18],
};

/* ---------------- SHELL CARDS ---------------- */

const cards = [
  {
    name: "Titan Shell",
    subtitle: "High Risk • High Reward",
    amount: "$2,400",
    percent: "+4.5%",
    positive: true,
    route: "high",
    colors: ["#7f1d1d", "#ef4444"],
    image: icons.redshell,
  },
  {
    name: "Atlas Shell",
    subtitle: "Medium Risk • Balanced",
    amount: "$1,800",
    percent: "+2.1%",
    positive: true,
    route: "mid",
    colors: ["#1e3a8a", "#3b82f6"],
    image: icons.guardianshell,
  },
  {
    name: "Guardian Shell",
    subtitle: "Low Risk • Stable",
    amount: "$900",
    percent: "-3.2%",
    positive: false,
    route: "low",
    colors: ["#064e3b", "#10b981"],
    image: icons.greenshell,
  },
];

/* ---------------- BIG GRAPH ---------------- */

const BigGraph = ({ data }: { data: number[] }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);

  const graphWidth = width - 70;
  const graphHeight = 220;

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * graphWidth;
      const y =
        graphHeight - ((d - min) / (max - min || 1)) * graphHeight;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <Svg height={graphHeight} width={graphWidth}>
      <Polyline
        points={points}
        fill="none"
        stroke="#22c55e"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

/* ---------------- MAIN SCREEN ---------------- */

const Portfolio = () => {
  const [selected, setSelected] = useState("overall");
  const router = useRouter();

  return (
    <LinearGradient
  colors={["#27288d", "#2a2b2f", "#18181a"]}
  locations={[0, 0.4, 1]}
  start={{ x: 0, y: 0 }}
  end={{ x: 0, y: 1 }}
  style={{ flex: 1 }}
>
  <ScrollView
    contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 56 }}
    showsVerticalScrollIndicator={false}
  >
      {/* HEADER */}
      <View className="mb-8">
        <Text className="text-white text-3xl font-bold">
          Your Portfolio
        </Text>
        <Text className="text-gray-400 mt-1">
          Smart Shell Overview
        </Text>
      </View>

      {cards.map((card, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          onPress={() => router.push(`/shells/${card.route}`)}
          style={[styles.horizontalWrapper, { shadowColor: card.colors[1] }]}
        >
          <LinearGradient
            colors={card.colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.horizontalCard}
          >
            {/* Shell Image */}
            <Image
              source={card.image}
              style={styles.horizontalImage}
              resizeMode="contain"
            />

            {/* Text Content */}
            <View className="flex-1">
              <Text className="text-white font-bold text-lg">
                {card.name}
              </Text>

              <Text className="text-white/80 text-[11px] mt-1">
                {card.subtitle}
              </Text>

              <View className="flex-row justify-between items-end mt-6">
                <Text className="text-white text-xl font-bold">
                  {card.amount}
                </Text>

                <Text
                  className={`text-base font-semibold ${
                    card.positive
                      ? "text-green-200"
                      : "text-red-200"
                  }`}
                >
                  {card.percent}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}

      <View className="h-32" />
  </ScrollView>
</LinearGradient>
  );
};

export default Portfolio;

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  horizontalWrapper: {
    width: "100%",
    height: 140,
    borderRadius: 28,
    marginBottom: 20,
    shadowOpacity: 0.6,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 12 },
    elevation: 15,
  },
  horizontalCard: {
    flex: 1,
    borderRadius: 28,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  horizontalImage: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
});