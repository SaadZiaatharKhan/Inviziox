import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import { icons } from "@/constants/icons";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";

/* 🔐 Hard-coded credentials */
const VALID_EMAIL = "test@example.com";
const VALID_PASSWORD = "123456";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSignInPress = useCallback(() => {
    if (!form.email || !form.password) {
      setErrorMessage("Please fill all fields");
      setShowErrorModal(true);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (
        form.email === VALID_EMAIL &&
        form.password === VALID_PASSWORD
      ) {
        setShowSuccessModal(true);
      } else {
        setErrorMessage("Invalid email or password");
        setShowErrorModal(true);
      }
      setLoading(false);
    }, 800);
  }, [form]);

  return (
    <SafeAreaView className="flex-1 bg-pianoBlack">
      {/* ================= SUCCESS MODAL ================= */}
      <Modal
        visible={showSuccessModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View className="flex-1 bg-black/60 justify-center items-center px-6">
          <View className="bg-white w-full rounded-3xl p-8 items-center">
            <Image source={icons.success} className="w-20 h-20 mb-4" />

            <Text className="text-2xl font-JakartaBold">
              Login Successful
            </Text>

            <Text className="text-gray-500 text-center mt-2">
              You have successfully logged in.
            </Text>

            <CustomButton
              title="Go to Home"
              onPress={() => {
                setShowSuccessModal(false);
                setTimeout(() => {
                  router.replace("/(tabs)/home");
                }, 150);
              }}
              className="mt-6 w-full"
            />
          </View>
        </View>
      </Modal>

      {/* ================= ERROR MODAL ================= */}
      <Modal
        visible={showErrorModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowErrorModal(false)}
      >
        <View className="flex-1 bg-black/60 justify-center items-center px-6">
          <View className="bg-white w-full rounded-3xl p-8 items-center">
            <Image source={icons.alert} className="w-20 h-20 mb-4" />

            <Text className="text-2xl font-JakartaBold">
              Login Failed
            </Text>

            <Text className="text-gray-500 text-center mt-2">
              {errorMessage}
            </Text>

            <CustomButton
              title="Try Again"
              onPress={() => {
                setErrorMessage("");
                setShowErrorModal(false);
              }}
              className="mt-6 w-full bg-red-500"
            />
          </View>
        </View>
      </Modal>

      {/* ================= MAIN CONTENT ================= */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 justify-center px-6">

            {/* ===== TITLE ===== */}
            <Text className="text-white text-3xl font-bold text-center mb-10">
              Login
            </Text>

            {/* ===== CARD ===== */}
            <View className="bg-bunker rounded-3xl p-6 shadow-xl">

              <InputField
                label="Email"
                placeholder="Enter your email"
                icon={icons.email}
                value={form.email}
                onChangeText={(value) =>
                  setForm({ ...form, email: value })
                }
              />

              <InputField
                label="Password"
                placeholder="Enter your password"
                icon={icons.password}
                secureTextEntry
                value={form.password}
                onChangeText={(value) =>
                  setForm({ ...form, password: value })
                }
              />

              <CustomButton
                title={loading ? "Signing In..." : "Login"}
                onPress={onSignInPress}
                disabled={loading}
                className="mt-6"
              />

              {/* Divider */}
              <View className="flex-row items-center my-6">
                <View className="flex-1 h-[1px] bg-gray-600" />
                <Text className="mx-3 text-gray-400 text-sm">
                  OR
                </Text>
                <View className="flex-1 h-[1px] bg-gray-600" />
              </View>

              {/* Google Button */}
              <TouchableOpacity className="flex-row items-center justify-center border bg- border-gray-500 rounded-2xl py-3">
                <Image
                  source={icons.google}
                  className="w-5 h-5 mr-3"
                />
                <Text className="text-white font-JakartaSemiBold">
                  Login with Google
                </Text>
              </TouchableOpacity>
            </View>

            {/* ===== SIGN UP LINK ===== */}
            <View className="mt-8 items-center">
              <Text className="text-gray-400">
                Don't have an account?{" "}
                <Link href="/sign-up">
                  <Text className="text-[#0B3D91] font-JakartaSemiBold">
                    Sign Up
                  </Text>
                </Link>
              </Text>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
