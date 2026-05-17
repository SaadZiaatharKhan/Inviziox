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

const lowCapShells = [
  {
    name: "Guardian Base",
    price: "$92,500",
    change: "-1.2%",
    image: icons.greenshell,
    route: "guardian-base",
    colors: ["#064e3b", "#10b981"] as const,
  },
  {
    name: "Cedar Spark",
    price: "$78,300",
    change: "+2.2%",
    image: icons.greenshell,
    route: "cedar-spark",
    colors: ["#14532d", "#22c55e"] as const,
  },
  {
    name: "Ember Nest",
    price: "$64,900",
    change: "+4.6%",
    image: icons.redshell,
    route: "ember-nest",
    colors: ["#7f1d1d", "#f97316"] as const,
  },
  {
    name: "Meadow Core",
    price: "$58,750",
    change: "-0.5%",
    image: icons.greenshell,
    route: "meadow-core",
    colors: ["#365314", "#84cc16"] as const,
  },
  {
    name: "Ripple Forge",
    price: "$49,600",
    change: "+3.1%",
    image: icons.guardianshell,
    route: "ripple-forge",
    colors: ["#0f766e", "#14b8a6"] as const,
  },
];

const LowCapShells = () => {
  const router = useRouter();

  return (
    <View className="mt-7">
      <View className="flex-row justify-between items-center px-4 mb-3">
        <Text className="text-lg font-semibold text-white">
          Low Cap Shells
        </Text>

        <TouchableOpacity onPress={() => router.push("/shells/low")}>
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
        {lowCapShells.map((shell) => (
          <TouchableOpacity
            key={shell.name}
            activeOpacity={0.85}
            onPress={() => router.push(`/shells/low/${shell.route}`)}
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
                    Low Cap
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

export default LowCapShells;
