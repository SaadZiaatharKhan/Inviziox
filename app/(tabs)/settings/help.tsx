import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"; // 🔁 replace

const Help = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">

      {/* Header */}
      <View className="px-5 py-4 border-b border-gray-800">
        <Text className="text-white text-2xl font-bold">
          Help & Support
        </Text>
        <Text className="text-gray-400 text-sm mt-1">
          Tell us your issue or feedback
        </Text>
      </View>

      {/* WebView */}
      <WebView
        source={{ uri: GOOGLE_FORM_URL }}
        style={{ flex: 1 }}
      />

      {/* Fallback Button */}
      <View className="p-4">
        <TouchableOpacity
          onPress={() => Linking.openURL(GOOGLE_FORM_URL)}
          className="bg-indigo-500 py-4 rounded-xl"
        >
          <Text className="text-center text-white font-semibold">
            Open in Browser
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default Help;