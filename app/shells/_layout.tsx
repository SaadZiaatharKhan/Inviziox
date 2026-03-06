import { Stack } from "expo-router";

export default function ShellsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // 🔥 removes default header
      }}
    />
  );
}
