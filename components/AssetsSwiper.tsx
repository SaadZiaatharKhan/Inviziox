import {
  View,
  Text,
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
const assets = [
  {
    id: 1,
    name: "Gold",
    unit: "per kg",
    price: "$2,045",
    change: "+1.8%",
    owned: "1.2 kg",
    color: "#facc15",
    image: icons.gold,
    graph: "M0 40 Q20 20 40 30 T80 15 T120 25",
  },
  {
    id: 2,
    name: "Silver",
    unit: "per kg",
    price: "$24.61",
    change: "+0.9%",
    owned: "8.5 kg",
    color: "#e5e7eb",
    image: icons.silver,
    graph: "M0 35 Q20 25 40 28 T80 18 T120 22",
  },
  {
    id: 3,
    name: "Oil",
    unit: "per barrel",
    price: "$78.32",
    change: "-1.2%",
    owned: "12 barrels",
    color: "#ef4444",
    image: icons.oil,
    graph: "M0 30 Q20 45 40 25 T80 40 T120 20",
  },
  {
    id: 4,
    name: "Copper",
    unit: "per lb",
    price: "$4.12",
    change: "+2.4%",
    owned: "320 lb",
    color: "#fb923c",
    image: icons.copper,
    graph: "M0 38 Q20 30 40 35 T80 22 T120 28",
  },
];

/* -------------------- BOTTOM SHEET -------------------- */
const AssetBottomSheet = ({
  visible,
  asset,
  onClose,
}: {
  visible: boolean;
  asset: any;
  onClose: () => void;
}) => {
  if (!asset) return null;

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
                source={asset.image}
                className="w-8 h-8 mr-3"
                resizeMode="contain"
              />
              <View>
                <Text className="text-xl font-semibold text-white">
                  {asset.name}
                </Text>
                <Text className="text-xs text-gray-400">
                  {asset.unit}
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={onClose}>
              <Text className="text-text-secondary">Close</Text>
            </TouchableOpacity>
          </View>

          {/* Price */}
          <Text className="text-gray-300 text-lg">
            {asset.price}
          </Text>
          <Text
            className="text-sm mb-4"
            style={{ color: asset.color }}
          >
            {asset.change}
          </Text>

          {/* Graph */}
          <Svg width="100%" height={140} viewBox="0 0 120 50">
            <Path
              d={asset.graph}
              stroke={asset.color}
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
              {asset.owned}
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
const AssetsSwiper = () => {
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [showSheet, setShowSheet] = useState(false);

  const openAsset = (asset: any) => {
    setSelectedAsset(asset);
    setShowSheet(true);
  };

  return (
    <View className="mt-7 px-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-semibold text-white">
          Assets
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text className="text-sm text-text-secondary">
            See more
          </Text>
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <View className="flex-row flex-wrap justify-between">
        {assets.map((asset) => (
          <TouchableOpacity
            key={asset.id}
            activeOpacity={0.6}
            className="w-[48%] mb-4"
            onPress={() => openAsset(asset)}
          >
            <View className="h-48 rounded-3xl bg-raisinBlack p-4">
              {/* Image + Name */}
              <View className="flex-row items-center mb-2">
                <Image
                  source={asset.image}
                  className="w-9 h-9 mr-2"
                  resizeMode="contain"
                />
                <View>
                  <Text className="text-white text-base font-semibold">
                    {asset.name}
                  </Text>
                  <Text className="text-xs text-gray-400">
                    {asset.unit}
                  </Text>
                </View>
              </View>

              {/* Price */}
              <Text className="text-gray-300 text-sm mt-1">
                {asset.price}
              </Text>

              {/* Change */}
              <Text
                className="text-sm mt-1"
                style={{ color: asset.color }}
              >
                {asset.change}
              </Text>

              {/* Graph */}
              <View className="flex-1 justify-end mt-2">
                <Svg width="100%" height={50} viewBox="0 0 120 50">
                  <Path
                    d={asset.graph}
                    stroke={asset.color}
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
      </View>

      {/* Bottom Sheet */}
      <AssetBottomSheet
        visible={showSheet}
        asset={selectedAsset}
        onClose={() => setShowSheet(false)}
      />
    </View>
  );
};

export default AssetsSwiper;
