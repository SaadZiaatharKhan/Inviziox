import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";
import { icons } from "@/constants/icons";

const { height } = Dimensions.get("window");

/* -------------------- DATA -------------------- */
const coins = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$45,389.16",
    change: "+2.45%",
    owned: "0.52 BTC",
    color: "#22c55e",
    image: icons.bitcoin,
    graph: "M0 40 Q20 10 40 25 T80 20 T120 30",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,389.41",
    change: "-1.12%",
    owned: "3.1 ETH",
    color: "#ef4444",
    image: icons.ethereum,
    graph: "M0 30 Q20 45 40 20 T80 35 T120 15",
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    price: "$98.27",
    change: "+4.82%",
    owned: "18 SOL",
    color: "#22c55e",
    image: icons.solana,
    graph: "M0 35 Q20 15 40 30 T80 10 T120 25",
  },
];

/* -------------------- BOTTOM SHEET -------------------- */
const CoinBottomSheet = ({
  visible,
  coin,
  onClose,
}: {
  visible: boolean;
  coin: any;
  onClose: () => void;
}) => {
  if (!coin) return null;

  return (
    <Modal transparent animationType="slide" visible={visible}>
      {/* Backdrop */}
      <Pressable
        className="flex-1 justify-end bg-black/50"
        onPress={onClose}
      >
        {/* Sheet */}
        <Pressable
          onPress={() => {}}
          className="bg-raisinBlack rounded-t-3xl px-5 pt-3"
          style={{ height: height * 0.65 }}
        >
          {/* Handle */}
          <View className="items-center mb-4">
            <View className="w-12 h-1.5 bg-gray-500 rounded-full" />
          </View>

          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center">
              <Image
                source={coin.image}
                className="w-8 h-8 mr-3"
                resizeMode="contain"
              />
              <View>
                <Text className="text-xl font-semibold text-white">
                  {coin.name}
                </Text>
                <Text className="text-xs text-gray-400">
                  {coin.symbol}
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={onClose}>
              <Text className="text-text-secondary">Close</Text>
            </TouchableOpacity>
          </View>

          {/* Price */}
          <Text className="text-gray-300 text-lg">
            {coin.price}
          </Text>
          <Text
            className="text-sm mb-4"
            style={{ color: coin.color }}
          >
            {coin.change}
          </Text>

          {/* Graph */}
          <Svg width="100%" height={140} viewBox="0 0 120 50">
            <Path
              d={coin.graph}
              stroke={coin.color}
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>

          {/* Owned */}
          <View className="mt-6">
            <Text className="text-text-muted text-sm">
              Currently Owned
            </Text>
            <Text className="text-white text-2xl font-semibold">
              {coin.owned}
            </Text>
          </View>

          {/* Actions */}
          <View className="flex-row justify-between mt-8">
            <TouchableOpacity className="bg-green-500 flex-1 mr-2 py-4 rounded-xl">
              <Text className="text-center text-black font-semibold">
                Buy
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-red-500 flex-1 ml-2 py-4 rounded-xl">
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

/* -------------------- MAIN COMPONENT -------------------- */
const TopCoins = () => {
  const [selectedCoin, setSelectedCoin] = useState<any>(null);
  const [showSheet, setShowSheet] = useState(false);

  const openCoin = (coin: any) => {
    setSelectedCoin(coin);
    setShowSheet(true);
  };

  return (
    <View className="mt-7">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 mb-3">
        <Text className="text-lg font-semibold text-white">
          Top Coins
        </Text>
        <TouchableOpacity>
          <Text className="text-sm text-text-secondary">
            See more
          </Text>
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {coins.map((coin) => (
          <TouchableOpacity
            key={coin.id}
            activeOpacity={0.7}
            onPress={() => openCoin(coin)}
          >
            <View className="w-56 h-44 mr-4 rounded-3xl bg-raisinBlack p-4">
              {/* Icon + Name */}
              <View className="flex-row items-center mb-2">
                <Image
                  source={coin.image}
                  className="w-9 h-9 mr-3"
                  resizeMode="contain"
                />
                <View>
                  <Text className="text-white text-base font-semibold">
                    {coin.name}
                  </Text>
                  <Text className="text-xs text-gray-400">
                    {coin.symbol}
                  </Text>
                </View>
              </View>

              {/* Price + Change */}
              <View className="h-10 justify-center">
                <Text className="text-gray-300 text-sm">
                  {coin.price}
                </Text>
                <Text
                  className="text-sm"
                  style={{ color: coin.color }}
                >
                  {coin.change}
                </Text>
              </View>

              {/* Graph */}
              <View className="flex-1 justify-end">
                <Svg width="100%" height={55} viewBox="0 0 120 50">
                  <Path
                    d={coin.graph}
                    stroke={coin.color}
                    strokeWidth={3}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Sheet */}
      <CoinBottomSheet
        visible={showSheet}
        coin={selectedCoin}
        onClose={() => setShowSheet(false)}
      />
    </View>
  );
};

export default TopCoins;
