import {
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

/* ---------------- QUESTIONS ---------------- */

const questions = [
  {
    q: "If your portfolio drops 25%, what do you do?",
    options: [
      { text: "Exit immediately", score: 1 },
      { text: "Withdraw partially", score: 2 },
      { text: "Hold", score: 3 },
      { text: "Buy more", score: 5 },
    ],
  },
  {
    q: "Your investment goal?",
    options: [
      { text: "Safety", score: 1 },
      { text: "Stable growth", score: 2 },
      { text: "High growth", score: 3 },
      { text: "Max returns", score: 5 },
    ],
  },
  {
    q: "Monthly allocation?",
    options: [
      { text: "<5%", score: 1 },
      { text: "5-15%", score: 2 },
      { text: "15-30%", score: 3 },
      { text: "30%+", score: 5 },
    ],
  },
  {
    q: "Crypto belief?",
    options: [
      { text: "Risky", score: 1 },
      { text: "Small exposure", score: 2 },
      { text: "Future", score: 3 },
      { text: "All in", score: 5 },
    ],
  },
  {
    q: "Trust AI?",
    options: [
      { text: "Low", score: 1 },
      { text: "Partial", score: 2 },
      { text: "Trust", score: 3 },
      { text: "Full autonomy", score: 5 },
    ],
  },
];

/* ---------------- MAIN ---------------- */

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  /* ---------- NEXT ---------- */
  const selectOption = (score: number) => {
    const updated = [...answers];
    updated[current] = score;
    setAnswers(updated);

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        submit(updated);
      }
    });
  };

  /* ---------- BACK ---------- */
  const goBack = () => {
    if (current === 0) return;

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setCurrent(current - 1);

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  /* ---------- SUBMIT ---------- */
  const submit = (finalAnswers: number[]) => {
    const total = finalAnswers.reduce((a, b) => a + b, 0);

    router.replace({
      pathname: "/(onboarding)/result",
      params: { score: total },
    });
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <SafeAreaView className="flex-1 bg-pianoBlack px-5">

      {/* 🔥 HEADER */}
      <View className="flex-row items-center justify-between mt-2 mb-4">
        <TouchableOpacity
          onPress={goBack}
          disabled={current === 0}
        >
          <Text
            className={`text-lg ${
              current === 0 ? "text-gray-600" : "text-white"
            }`}
          >
            ← Back
          </Text>
        </TouchableOpacity>

        <Text className="text-gray-400 text-sm">
          {current + 1}/{questions.length}
        </Text>
      </View>

      {/* 🔥 Progress Bar */}
      <View className="mb-6">
        <View className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <View
            style={{ width: `${progress}%` }}
            className="h-full bg-indigo-500"
          />
        </View>
      </View>

      {/* 🔥 Question */}
      <Animated.View
        style={{ opacity: fadeAnim }}
        className="flex-1 justify-center"
      >
        <View className="bg-[#1f2937] rounded-3xl p-6">

          <Text className="text-white text-xl font-bold mb-6">
            {questions[current].q}
          </Text>

          {questions[current].options.map((opt, idx) => {
            const isSelected = answers[current] === opt.score;

            return (
              <TouchableOpacity
                key={idx}
                onPress={() => selectOption(opt.score)}
                activeOpacity={0.85}
                className={`p-4 rounded-xl mb-3 ${
                  isSelected ? "bg-indigo-500" : "bg-[#111827]"
                }`}
                style={{
                  shadowColor: "#000",
                  shadowOpacity: 0.2,
                  shadowRadius: 6,
                  shadowOffset: { width: 0, height: 3 },
                  elevation: 4,
                }}
              >
                <Text className="text-white text-base">
                  {opt.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Animated.View>

      {/* 🔥 Bottom Info */}
      <View className="mb-6">
        <Text className="text-center text-gray-500 text-xs">
          You can go back and change your answers anytime
        </Text>
      </View>

    </SafeAreaView>
  );
};

export default Quiz;