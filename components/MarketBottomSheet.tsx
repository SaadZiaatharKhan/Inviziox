import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import {
  StockItem,
  CryptoItem,
  AssetItem,
} from "@/constants/marketData";

const { height } = Dimensions.get("window");

type MarketEntity = StockItem | CryptoItem | AssetItem;

interface Props {
  visible: boolean;
  item: MarketEntity | null;
  onClose: () => void;
}

const MarketBottomSheet: React.FC<Props> = ({
  visible,
  item,
  onClose,
}) => {
  if (!item) return null;

  const isProfit = item.profitLossPercent >= 0;
  const color = isProfit ? "#22c55e" : "#ef4444";

  const price =
    "amount" in item ? item.amount : item.pricePerUnit;

  // Convert graph array to SVG path (simple curve)
  const graphPath = `M0 40 ${item.graph
    .map((val, i) => `T${i * 25 + 20} ${50 - val / 10}`)
    .join(" ")}`;

  return (
    <Modal transparent visible={visible} animationType="slide">
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
            <View className="flex-row items-center gap-3">
              {"image" in item && (
                <Image
                  source={{ uri: item.image }}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <Text className="text-xl font-semibold text-white">
                {item.name}
              </Text>
            </View>

            <TouchableOpacity onPress={onClose}>
              <Text className="text-text-secondary">Close</Text>
            </TouchableOpacity>
          </View>

          {/* Price */}
          <Text className="text-gray-300 text-lg">
            ₹{price}
          </Text>
          <Text className="text-sm mb-4" style={{ color }}>
            {isProfit ? "+" : ""}
            {item.profitLossPercent}%
          </Text>

          {/* Graph */}
          <Svg width="100%" height={140} viewBox="0 0 120 50">
            <Path
              d={graphPath}
              stroke={color}
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>

          {/* Owned Info */}
          {"stocksOwned" in item && (
            <View className="mt-6">
              <Text className="text-text-muted text-sm">
                Currently Owned
              </Text>
              <Text className="text-white text-2xl font-semibold">
                {item.stocksOwned} Shares
              </Text>
            </View>
          )}

          {"unitsOwned" in item && (
            <View className="mt-6">
              <Text className="text-text-muted text-sm">
                Currently Owned
              </Text>
              <Text className="text-white text-2xl font-semibold">
                {item.unitsOwned} Units
              </Text>
            </View>
          )}

          {"unit" in item && (
            <View className="mt-6">
              <Text className="text-text-muted text-sm">
                Unit
              </Text>
              <Text className="text-white text-2xl font-semibold">
                {item.unit}
              </Text>
            </View>
          )}

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

export default MarketBottomSheet;
