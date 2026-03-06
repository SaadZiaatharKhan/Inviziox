import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Polyline, Path } from "react-native-svg";
import { icons } from "@/constants/icons";

const { width, height } = Dimensions.get("window");

/* ---------------- THEME CONFIG ---------------- */

const themeConfig: any = {
  high: {
    background: ["#2a0a0a", "#18181a"],
    accent: "#ef4444",
  },
  mid: {
    background: ["#0f172a", "#18181a"],
    accent: "#3b82f6",
  },
  low: {
    background: ["#052e2b", "#18181a"],
    accent: "#10b981",
  },
};

/* ---------------- MOCK DATA ---------------- */

const stocks = [
  {
    id: 1,
    name: "Apple",
    price: "$189.22",
    change: "+2.14%",
    owned: "12 Shares",
    graph: "M0 40 Q20 10 40 25 T80 20 T120 30",
  },
  {
    id: 2,
    name: "Tesla",
    price: "$248.91",
    change: "-1.62%",
    owned: "5 Shares",
    graph: "M0 30 Q20 45 40 20 T80 35 T120 15",
  },
];

const crypto = [
  {
    id: 1,
    name: "Bitcoin",
    price: "$45,389",
    change: "+2.45%",
    owned: "0.52 BTC",
    image: icons.bitcoin,
    graph: "M0 40 Q20 10 40 25 T80 20 T120 30",
  },
];

const gold = [
  {
    id: 1,
    name: "Gold",
    price: "$2,045",
    change: "+1.8%",
    owned: "1.2 kg",
    image: icons.gold,
    graph: "M0 40 Q20 20 40 30 T80 15 T120 25",
  },
];

/* ---------------- BOTTOM SHEET ---------------- */

const DetailBottomSheet = ({
  visible,
  item,
  onClose,
  accent,
}: {
  visible: boolean;
  item: any;
  onClose: () => void;
  accent: string;
}) => {
  if (!item) return null;

  const positive = item.change.includes("+");

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <Pressable
        className="flex-1 justify-end bg-black/60"
        onPress={onClose}
      >
        <Pressable
          onPress={() => {}}
          className="bg-[#1c1c20] rounded-t-3xl px-5 pt-3"
          style={{ height: height * 0.65 }}
        >
          <View className="items-center mb-4">
            <View className="w-12 h-1.5 bg-gray-600 rounded-full" />
          </View>

          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-semibold text-white">
              {item.name}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className="text-gray-400">Close</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-gray-300 text-lg">{item.price}</Text>
          <Text
            className="text-sm mb-4"
            style={{ color: positive ? "#22c55e" : "#ef4444" }}
          >
            {item.change}
          </Text>

          <Svg width="100%" height={140} viewBox="0 0 120 50">
            <Path
              d={item.graph}
              stroke={accent}
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>

          <View className="mt-6">
            <Text className="text-gray-400 text-sm">
              Currently Owned
            </Text>
            <Text className="text-white text-2xl font-semibold">
              {item.owned}
            </Text>
          </View>

          <View className="flex-row justify-between mt-8">
            <TouchableOpacity
              style={{
                backgroundColor: accent,
                flex: 1,
                marginRight: 8,
                paddingVertical: 16,
                borderRadius: 14,
              }}
            >
              <Text className="text-center text-black font-semibold">
                Buy
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-red-600 flex-1 ml-2 py-4 rounded-xl"
            >
              <Text className="text-center text-white font-semibold">
                Sell
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

/* ---------------- MAIN SCREEN ---------------- */

export default function ShellScreen() {
  const { category, shell } = useLocalSearchParams();
  const theme = themeConfig[category as string] || themeConfig.high;

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showSheet, setShowSheet] = useState(false);

  const openItem = (item: any) => {
    setSelectedItem(item);
    setShowSheet(true);
  };

  return (
    <LinearGradient
      colors={theme.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView className="px-5 pt-14">

        {/* Title */}
        <Text className="text-white text-3xl font-bold mb-6">
          {shell
            ? shell
                .toString()
                .replace(/([a-zA-Z]+)(\d+)/, "$1 $2")
                .replace(/^./, (c) => c.toUpperCase())
            : ""}
        </Text>

        {/* PERFORMANCE */}
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            borderWidth: 1,
            borderColor: theme.accent + "40",
          }}
          className="rounded-3xl p-5 mb-8"
        >
          <Text
            style={{ color: theme.accent }}
            className="mb-4 font-semibold"
          >
            Performance
          </Text>

          <Svg height={200} width={width - 40}>
            <Polyline
              points="0,150 50,100 100,120 150,80 200,110 250,60 300,90"
              fill="none"
              stroke={theme.accent}
              strokeWidth="4"
            />
          </Svg>
        </View>

        {/* SECTION RENDER FUNCTION */}
        {[
          { title: "Stocks", data: stocks },
          { title: "Crypto", data: crypto },
          { title: "Gold & Commodities", data: gold },
        ].map((section, idx) => (
          <View key={idx}>
            <Text
              style={{ color: theme.accent }}
              className="text-xl font-semibold mt-6 mb-4"
            >
              {section.title}
            </Text>

            {section.data.map((item: any) => {
              const positive = item.change.includes("+");

              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => openItem(item)}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderWidth: 1,
                    borderColor: theme.accent + "30",
                  }}
                  className="p-5 rounded-2xl mb-4"
                >
                  <View className="flex-row justify-between">
                    <Text className="text-white font-semibold">
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: positive
                          ? "#22c55e"
                          : "#ef4444",
                      }}
                    >
                      {item.change}
                    </Text>
                  </View>

                  <Text className="text-gray-400 mt-1">
                    {item.price}
                  </Text>

                  <Svg width="100%" height={50} viewBox="0 0 120 50">
                    <Path
                      d={item.graph}
                      stroke={theme.accent}
                      strokeWidth={3}
                      fill="none"
                    />
                  </Svg>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        <View className="h-20" />

        <DetailBottomSheet
          visible={showSheet}
          item={selectedItem}
          onClose={() => setShowSheet(false)}
          accent={theme.accent}
        />
      </ScrollView>
    </LinearGradient>
  );
}