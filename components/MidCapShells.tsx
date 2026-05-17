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

const midCapShells = [
  {
    name: "Atlas Core",
    price: "$142,000",
    change: "+2.1%",
    image: icons.guardianshell,
    route: "atlas-core",
    colors: ["#1e3a8a", "#3b82f6"] as const,
  },
  {
    name: "Nova Bridge",
    price: "$128,600",
    change: "+3.4%",
    image: icons.guardianshell,
    route: "nova-bridge",
    colors: ["#3730a3", "#6366f1"] as const,
  },
  {
    name: "Orbit Lattice",
    price: "$117,250",
    change: "+1.7%",
    image: icons.greenshell,
    route: "orbit-lattice",
    colors: ["#155e75", "#06b6d4"] as const,
  },
  {
    name: "Meridian Pulse",
    price: "$109,800",
    change: "-0.8%",
    image: icons.redshell,
    route: "meridian-pulse",
    colors: ["#4c1d95", "#8b5cf6"] as const,
  },
  {
    name: "Velocity Harbor",
    price: "$101,450",
    change: "+2.6%",
    image: icons.guardianshell,
    route: "velocity-harbor",
    colors: ["#164e63", "#0ea5e9"] as const,
  },
];

const MidCapShells = () => {
  const router = useRouter();

  return (
    <View className="mt-7">
      <View className="flex-row justify-between items-center px-4 mb-3">
        <Text className="text-lg font-semibold text-white">
          Mid Cap Shells
        </Text>

        <TouchableOpacity onPress={() => router.push("/shells/mid")}>
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
        {midCapShells.map((shell) => (
          <TouchableOpacity
            key={shell.name}
            activeOpacity={0.85}
            onPress={() => router.push(`/shells/mid/${shell.route}`)}
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
                    Mid Cap
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

export default MidCapShells;
