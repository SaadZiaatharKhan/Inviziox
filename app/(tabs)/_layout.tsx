import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import { ThemeProvider } from "@/components/ThemeContext";

const TabIcon = ({
  source,
  focused,
  title,
}: {
  source: ImageSourcePropType;
  focused: boolean;
  title: string;
}) => (
  <View className="items-center justify-center h-14 w-14">
    <Image
      source={source}
      resizeMode="contain"
      className="w-7 h-7"
      style={{
        tintColor: focused ? "#ffffff" : "#6b7280", // white / gray
      }}
    />
    <Text
      className={`text-[9px] mt-1 ${focused ? "text-white" : "text-gray-500"}`}
    >
      {title}
    </Text>
  </View>
);

// 🔥 Bigger Add Button
const AddTabIcon = ({ focused }: { focused: boolean }) => (
  <View className="items-center justify-center -mt-16">
    <View
      className="w-20 h-20 rounded-full items-center justify-center"
      style={{
        backgroundColor: focused ? "#ffffff" : "#e5e7eb",
        elevation: 19,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
      }}
    >
      <Image
        source={icons.add}
        resizeMode="contain"
        className="w-8 h-8"
        style={{
          tintColor: "#1f2937", // dark gray
        }}
      />
    </View>
  </View>
);

const _Layout = () => {
  return (
    <View className="flex-1 bg-black">
      <ThemeProvider>
        <Tabs
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "#2a2b2f",
              height: 90,
              paddingTop: 10,
              paddingBottom: 12,
              position: "relative",
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              elevation: 5,
              shadowColor: "#000",
              shadowOpacity: 0.3,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 4 },
            },
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon source={icons.home} focused={focused} title="Home" />
              ),
            }}
          />

          <Tabs.Screen
            name="market"
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon
                  source={icons.market}
                  focused={focused}
                  title="Market"
                />
              ),
            }}
          />

          <Tabs.Screen
            name="add"
            options={{
              tabBarIcon: ({ focused }) => <AddTabIcon focused={focused} />,
            }}
          />

          <Tabs.Screen
            name="portfolio"
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon
                  source={icons.portfolio}
                  focused={focused}
                  title="Portfolio"
                />
              ),
            }}
          />

          <Tabs.Screen
            name="settings"
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon
                  source={icons.settings}
                  focused={focused}
                  title="Settings"
                />
              ),
            }}
          />
        </Tabs>
      </ThemeProvider>
    </View>
  );
};

export default _Layout;
