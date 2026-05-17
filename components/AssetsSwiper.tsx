import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";
import { icons } from "@/constants/icons";

const { height } = Dimensions.get("window");

const sipOptions = [
  {
    label: "Daily",
    rate: "$25",
  },
  {
    label: "Weekly",
    rate: "$150",
  },
  {
    label: "Monthly",
    rate: "$500",
  },
];

/* -------------------- DATA -------------------- */
const assets = [
  {
    id: 1,
    name: "Gold",
    unit: "per troy oz",
    price: "$2,045",
    change: "+1.8%",
    owned: "38.58 oz t",
    color: "#facc15",
    image: icons.gold,
    graph: "M0 40 Q20 20 40 30 T80 15 T120 25",
  },
  {
    id: 2,
    name: "Silver",
    unit: "per troy oz",
    price: "$24.61",
    change: "+0.9%",
    owned: "273.28 oz t",
    color: "#e5e7eb",
    image: icons.silver,
    graph: "M0 35 Q20 25 40 28 T80 18 T120 22",
  },
];

/* -------------------- BOTTOM SHEET -------------------- */
const AssetBottomSheet = ({
  visible,
  asset,
  onClose,
  onStartSip,
}: {
  visible: boolean;
  asset: any;
  onClose: () => void;
  onStartSip: (option: { label: string; rate: string }) => void;
}) => {
  if (!asset) return null;

  const isGold = asset.name === "Gold";

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
          {isGold ? (
            <View className="mt-6">
              <Text className="text-text-muted text-sm mb-3">
                Start SIP
              </Text>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {sipOptions.map((option) => (
                  <TouchableOpacity
                    key={option.label}
                    activeOpacity={0.75}
                    onPress={() => onStartSip(option)}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 mr-3"
                    style={{ width: 150 }}
                  >
                    <View className="flex-row items-center justify-between">
                      <Text className="text-white font-semibold">
                        {option.label}
                      </Text>
                      <Text className="text-yellow-300 font-bold">
                        {option.rate}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          ) : (
            <View className="mt-6">
              <Text className="text-text-muted text-sm">
                Currently Owned
              </Text>
              <Text className="text-white text-2xl font-semibold">
                {asset.owned}
              </Text>
            </View>
          )}

          {!isGold && (
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
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const SipPopup = ({
  visible,
  option,
  onCancel,
  onBuy,
}: {
  visible: boolean;
  option: { label: string; rate: string } | null;
  onCancel: () => void;
  onBuy: () => void;
}) => {
  if (!option) return null;

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View className="flex-1 items-center justify-center bg-black/60 px-6">
        <View className="w-full rounded-3xl bg-raisinBlack p-5">
          <Text className="text-white text-xl font-semibold">
            Start SIP
          </Text>
          <Text className="text-gray-400 mt-2">
            {option.label} gold SIP
          </Text>
          <Text className="text-yellow-300 text-3xl font-bold mt-4">
            {option.rate}
          </Text>

          <View className="flex-row mt-8">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onBuy}
              className="bg-green-500 flex-1 mr-2 py-4 rounded-xl"
            >
              <Text className="text-center text-black font-semibold">
                Buy
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onCancel}
              className="bg-white/10 flex-1 ml-2 py-4 rounded-xl"
            >
              <Text className="text-center text-white font-semibold">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const FeesPopup = ({
  visible,
  onCancel,
}: {
  visible: boolean;
  onCancel: () => void;
}) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View className="flex-1 items-center justify-center bg-black/60 px-6">
        <View className="w-full rounded-3xl bg-raisinBlack p-5">
          <Text className="text-white text-xl font-semibold">
            Confirm Purchase
          </Text>
          <Text className="text-gray-300 mt-3 leading-6">
            Government fees and platform fees are applied. Do you want to proceed?
          </Text>

          <View className="flex-row mt-8">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {}}
              className="bg-green-500 flex-1 mr-2 py-4 rounded-xl"
            >
              <Text className="text-center text-black font-semibold">
                Buy
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onCancel}
              className="bg-white/10 flex-1 ml-2 py-4 rounded-xl"
            >
              <Text className="text-center text-white font-semibold">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

/* -------------------- MAIN COMPONENT -------------------- */
const AssetsSwiper = () => {
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [selectedSip, setSelectedSip] = useState<{
    label: string;
    rate: string;
  } | null>(null);
  const [showSheet, setShowSheet] = useState(false);
  const [showSipPopup, setShowSipPopup] = useState(false);
  const [showFeesPopup, setShowFeesPopup] = useState(false);

  const openAsset = (asset: any) => {
    setSelectedAsset(asset);
    setShowSheet(true);
  };

  const closeAllPopups = () => {
    setShowFeesPopup(false);
    setShowSipPopup(false);
    setSelectedSip(null);
  };

  const openSipPopup = (option: { label: string; rate: string }) => {
    setSelectedSip(option);
    setShowSipPopup(true);
  };

  const openFeesPopup = () => {
    setShowSipPopup(false);
    setShowFeesPopup(true);
  };

  return (
    <View className="mt-7 px-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-semibold text-white">
          Gold and SIP
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
        onStartSip={openSipPopup}
      />
      <SipPopup
        visible={showSipPopup}
        option={selectedSip}
        onCancel={closeAllPopups}
        onBuy={openFeesPopup}
      />
      <FeesPopup
        visible={showFeesPopup}
        onCancel={closeAllPopups}
      />
    </View>
  );
};

export default AssetsSwiper;
