import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { icons } from "@/constants/icons";

const highCapShells = [
  {
    name: "Apex Titan",
    price: "$182,400",
    change: "+5.2%",
    image: icons.redshell,
    route: "apex-titan",
    colors: ["#7f1d1d", "#ef4444"] as const,
  },
  {
    name: "Prime Atlas",
    price: "$174,850",
    change: "+3.8%",
    image: icons.guardianshell,
    route: "prime-atlas",
    colors: ["#1e3a8a", "#3b82f6"] as const,
  },
  {
    name: "Crown Vault",
    price: "$168,900",
    change: "+2.9%",
    image: icons.greenshell,
    route: "crown-vault",
    colors: ["#064e3b", "#10b981"] as const,
  },
  {
    name: "Royal Core",
    price: "$159,300",
    change: "-1.1%",
    image: icons.redshell,
    route: "royal-core",
    colors: ["#581c87", "#a855f7"] as const,
  },
  {
    name: "Elite Shield",
    price: "$151,750",
    change: "+4.1%",
    image: icons.guardianshell,
    route: "elite-shield",
    colors: ["#854d0e", "#f59e0b"] as const,
  },
];

const HighCapShells = () => {
  const router = useRouter();

  return (
    <View className="mt-7">
      <View className="flex-row justify-between items-center px-4 mb-3">
        <Text className="text-lg font-semibold text-white">
          High Cap Shells
        </Text>

        <TouchableOpacity onPress={() => router.push("/shells/high")}>
          <Text className="text-sm text-text-secondary">
            See more
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {highCapShells.map((shell) => (
          <TouchableOpacity
            key={shell.name}
            activeOpacity={0.85}
            onPress={() => router.push(`/shells/high/${shell.route}`)}
            style={{ marginRight: 16 }}
          >
            <LinearGradient
              colors={shell.colors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: 190,
                height: 170,
                borderRadius: 28,
                padding: 16,
                justifyContent: "space-between",
              }}
            >
              <View className="flex-row items-start justify-between">
                <Image
                  source={shell.image}
                  style={{ width: 44, height: 44 }}
                  resizeMode="contain"
                />

                <View className="bg-white/15 px-2 py-1 rounded-full">
                  <Text className="text-white text-[10px]">
                    High Cap
                  </Text>
                </View>
              </View>

              <View>
                <Text className="text-white text-base font-semibold">
                  {shell.name}
                </Text>

                <Text className="text-white text-xl font-bold mt-2">
                  {shell.price}
                </Text>

                <Text
                  className="text-sm font-semibold mt-1"
                  style={{
                    color:
                      shell.change[0] === "+"
                        ? "#bbf7d0"
                        : "#fecaca",
                  }}
                >
                  {shell.change}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HighCapShells;
