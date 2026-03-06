import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";

const { height } = Dimensions.get("window");

/* -------------------- DATA -------------------- */
const stocks = [
  {
    id: 1,
    name: "Apple",
    price: "$189.22",
    change: "+2.14%",
    owned: 12,
    color: "#22c55e",
    graph: "M0 40 Q20 10 40 25 T80 20 T120 30",
  },
  {
    id: 2,
    name: "Tesla",
    price: "$248.91",
    change: "-1.62%",
    owned: 5,
    color: "#ef4444",
    graph: "M0 30 Q20 45 40 20 T80 35 T120 15",
  },
  {
    id: 3,
    name: "Google",
    price: "$142.67",
    change: "+3.08%",
    owned: 8,
    color: "#22c55e",
    graph: "M0 35 Q20 15 40 30 T80 10 T120 25",
  },
  {
    id: 4,
    name: "Amazon",
    price: "$176.41",
    change: "+0.92%",
    owned: 3,
    color: "#22c55e",
    graph: "M0 40 Q20 25 40 35 T80 20 T120 30",
  },
];

/* -------------------- BOTTOM SHEET -------------------- */
const StockBottomSheet = ({
  visible,
  stock,
  onClose,
}: {
  visible: boolean;
  stock: any;
  onClose: () => void;
}) => {
  if (!stock) return null;

  return (
    <Modal transparent visible={visible} animationType="slide">
      {/* Backdrop + container */}
      <Pressable
        className="flex-1 justify-end bg-black/50"
        onPress={onClose}
      >
        {/* Sheet (stop propagation so taps INSIDE don't close) */}
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
            <Text className="text-xl font-semibold text-white">
              {stock.name}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className="text-text-secondary">Close</Text>
            </TouchableOpacity>
          </View>

          {/* Price */}
          <Text className="text-gray-300 text-lg">
            {stock.price}
          </Text>
          <Text
            className="text-sm mb-4"
            style={{ color: stock.color }}
          >
            {stock.change}
          </Text>

          {/* Graph */}
          <Svg width="100%" height={140} viewBox="0 0 120 50">
            <Path
              d={stock.graph}
              stroke={stock.color}
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
              {stock.owned} Shares
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
const TopStocks = () => {
  const [selectedStock, setSelectedStock] = useState<any>(null);
  const [showSheet, setShowSheet] = useState(false);

  const openStock = (stock: any) => {
    setSelectedStock(stock);
    setShowSheet(true);
  };

  return (
    <View className="mt-7">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 mb-3">
        <Text className="text-lg font-semibold text-white">
          Top Stocks
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
        {stocks.map((stock) => (
          <TouchableOpacity
            key={stock.id}
            activeOpacity={0.7}
            onPress={() => openStock(stock)}
          >
            <View className="w-56 h-44 mr-4 rounded-3xl bg-raisinBlack p-4">
              <Text className="text-white text-base font-semibold">
                {stock.name}
              </Text>

              <Text className="text-gray-300 text-sm mt-1">
                {stock.price}
              </Text>

              <Text
                className="text-sm mt-1"
                style={{ color: stock.color }}
              >
                {stock.change}
              </Text>

              <View className="flex-1 justify-end">
                <Svg width="100%" height={60} viewBox="0 0 120 50">
                  <Path
                    d={stock.graph}
                    stroke={stock.color}
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
      <StockBottomSheet
        visible={showSheet}
        stock={selectedStock}
        onClose={() => setShowSheet(false)}
      />
    </View>
  );
};

export default TopStocks;
