import { Stack } from 'expo-router';

export default function RootsLayout() {
  return (
    <Stack>
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="help" options={{ headerShown: false }} />
      <Stack.Screen name="unit-converter" options={{ headerShown: false }} />
    </Stack>
  );
}