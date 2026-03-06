import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants/icons";
import { LinearGradient } from "expo-linear-gradient";
import CandlestickChart from "@/components/CandlestickChart";
import TopStocks from "@/components/TopStocks";
import TopCoins from "@/components/TopCoins";
import AssetsSwiper from "@/components/AssetsSwiper";

const Home = () => {
  const [showGraph, setShowGraph] = useState(false);

  return (
    <ScrollView
      className="bg-pianoBlack"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
    paddingBottom: 1, // ✅ prevents tab bar overlap
  }}
    >
      {/* 🔹 Balance Card */}
      <View className="items-center">
        <View className="h-64 w-11/12 rounded-3xl mt-11 overflow-hidden">
          <LinearGradient
            colors={["#d5d3e3", "#625fee", "#27288d", "#2a2b2f"]}
            locations={[0, 0.35, 0.5, 1]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            className="flex-1 p-4 rounded-3xl"
          >
            {/* Header */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <TouchableOpacity>
                  <Image
                    source={icons.user}
                    className="w-11 h-11"
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <Text className="ml-2 text-text-primary font-semibold">
                  Saad Khan
                </Text>
              </View>

              <TouchableOpacity>
                <Image
                  source={icons.notification_read}
                  className="w-11 h-11"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            {/* Balance */}
            <View className="pt-7">
              <Text className="text-text-muted text-xs">
                Total Balance
              </Text>
              <Text className="text-text-primary text-5xl font-bold mt-2">
                $2,000
              </Text>
            </View>

            {/* Profit + Graph */}
            <View className="flex-row items-end mt-4">
              <View>
                <Image
                  source={icons.profit}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
                <Text className="text-positive text-sm -mt-1">
                  +35.4%
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => setShowGraph(true)}
                className="ml-4 mb-1"
              >
                <Text className="text-text-muted text-sm font-semibold">
                  View Graph
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>

      {/* 🔹 Sections (NO items-center here) */}
      <TopStocks />
      <TopCoins />
      <AssetsSwiper />

      {/* Bottom spacing */}
      <View className="h-10" />

      {/* Modal */}
      <CandlestickChart
        visible={showGraph}
        onClose={() => setShowGraph(false)}
      />
    </ScrollView>
  );
};

export default Home;
