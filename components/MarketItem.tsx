import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  StockItem,
  CryptoItem,
  AssetItem,
} from "@/constants/marketData";

type MarketEntity = StockItem | CryptoItem | AssetItem;

interface Props {
  item: MarketEntity;
  onPress: () => void;
}

const MarketItem: React.FC<Props> = ({ item, onPress }) => {
  const isProfit = item.profitLossPercent >= 0;
  const price =
    "amount" in item ? item.amount : item.pricePerUnit;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="bg-raisinBlack rounded-2xl p-4 mb-3"
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-3">
          {"image" in item && (
            <Image
              source={{ uri: item.image }}
              className="w-9 h-9 rounded-full"
            />
          )}
          <Text className="text-white font-semibold text-base">
            {item.name}
          </Text>
        </View>

        <View className="items-end">
          <Text className="text-white font-semibold">
            ₹{price}
          </Text>
          <Text
            className={`text-sm ${
              isProfit ? "text-green-400" : "text-red-400"
            }`}
          >
            {isProfit ? "+" : ""}
            {item.profitLossPercent}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MarketItem;
