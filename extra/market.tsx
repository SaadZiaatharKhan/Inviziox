import {
  View,
  TextInput,
  FlatList,
} from "react-native";
import React, { useMemo, useState } from "react";
import { Picker } from "@react-native-picker/picker";

import {
  stocksData,
  cryptoData,
  assetsData,
  MarketCategory,
  StockItem,
  CryptoItem,
  AssetItem,
} from "@/constants/marketData";

import MarketItem from "@/components/MarketItem";
import MarketBottomSheet from "@/components/MarketBottomSheet";

type MarketEntity = StockItem | CryptoItem | AssetItem;

const Market: React.FC = () => {
  const [category, setCategory] =
    useState<MarketCategory>("stocks");
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] =
    useState<MarketEntity | null>(null);
  const [showSheet, setShowSheet] = useState(false);

  const dataMap = {
    stocks: stocksData,
    crypto: cryptoData,
    assets: assetsData,
  };

  const filteredData = useMemo(() => {
    return dataMap[category].filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [category, search]);

  const openItem = (item: MarketEntity) => {
    setSelectedItem(item);
    setShowSheet(true);
  };

  return (
    <View className="bg-pianoBlack h-full px-4 pt-4">
      {/* Header */}
      <View className="flex-row gap-2 mb-4">
        <View className="w-[70%] bg-raisinBlack rounded-lg px-3 py-2">
          <TextInput
            placeholder="Search market..."
            placeholderTextColor="#9ca3af"
            value={search}
            onChangeText={setSearch}
            className="text-white"
          />
        </View>

        <View className="w-[30%] bg-raisinBlack rounded-lg overflow-hidden">
          <Picker
            selectedValue={category}
            onValueChange={setCategory}
            dropdownIconColor="#fff"
            style={{ color: "white" }}
          >
            <Picker.Item label="Stocks" value="stocks" />
            <Picker.Item label="Crypto" value="crypto" />
            <Picker.Item label="Assets" value="assets" />
          </Picker>
        </View>
      </View>

      {/* List */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MarketItem
            item={item}
            onPress={() => openItem(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Sheet */}
      <MarketBottomSheet
        visible={showSheet}
        item={selectedItem}
        onClose={() => setShowSheet(false)}
      />
    </View>
  );
};

export default Market;
