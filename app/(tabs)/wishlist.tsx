import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { icons } from "@/constants/icons";

/* ---------------- MOCK WISHLIST DATA ---------------- */
/* Replace this later with global state / context */

const wishlistAssets = [
  {
    name: "Gold",
    price: "$169,700",
  },
  {
    name: "Silver",
    price: "$142,000",
  },
  {
    name: "Oil",
    price: "$92,500",
  },
];

/* ---------------- TRANSFORM TO SHELLS ---------------- */

const getShellFromAsset = (asset: any) => {
  if (asset.name === "Gold") {
    return {
      name: "Titan Vault",
      subtitle: "High Cap • Strong Growth",
      amount: asset.price,
      percent: "+4.5%",
      positive: true,
      route: "high",
      shellRoute: "titan-vault",
      colors: ["#7f1d1d", "#ef4444"] as const, // RED
      image: icons.redshell,
    };
  }

  if (asset.name === "Silver") {
    return {
      name: "Atlas Core",
      subtitle: "Mid Cap • Balanced",
      amount: asset.price,
      percent: "+2.1%",
      positive: true,
      route: "mid",
      shellRoute: "atlas-core",
      colors: ["#1e3a8a", "#3b82f6"] as const, // BLUE
      image: icons.guardianshell,
    };
  }

  return {
    name: "Guardian Base",
    subtitle: "Low Cap • Stable",
    amount: asset.price,
    percent: "-1.2%",
    positive: false,
    route: "low",
    shellRoute: "guardian-base",
    colors: ["#064e3b", "#10b981"] as const, // GREEN
    image: icons.greenshell,
  };
};

/* ---------------- MAIN SCREEN ---------------- */

const Wishlist = () => {
  const router = useRouter();

  const shells = wishlistAssets.map(getShellFromAsset);

  return (
    <LinearGradient
      colors={["#111827", "#1f2937", "#000000"]}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 56 }}
      >
        {/* HEADER */}
        <View className="mb-8">
          <Text className="text-white text-3xl font-bold">
            Your Wishlist
          </Text>
          <Text className="text-gray-400 mt-1">
            Saved Shells (Not Purchased)
          </Text>
        </View>

        {/* SHELL CARDS */}
        {shells.map((card, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            onPress={() => router.push(`/shells/${card.route}/${card.shellRoute}`)}
            style={[styles.wrapper, { shadowColor: card.colors[1] }]}
          >
            <LinearGradient
              colors={card.colors}
              style={styles.card}
            >
              <Image
                source={card.image}
                style={styles.image}
                resizeMode="contain"
              />

              <View className="flex-1">
                <Text className="text-white font-bold text-lg">
                  {card.name}
                </Text>

                <Text className="text-white/80 text-[11px] mt-1">
                  {card.subtitle}
                </Text>

                <View className="flex-row justify-between mt-6">
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

export default Wishlist;

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 140,
    borderRadius: 28,
    marginBottom: 20,
    shadowOpacity: 0.6,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 12 },
    elevation: 15,
  },
  card: {
    flex: 1,
    borderRadius: 28,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
});
