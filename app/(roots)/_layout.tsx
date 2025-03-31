import { Stack } from 'expo-router';

export default function RootsLayout() {
  return (
    <Stack>
      <Stack.Screen name="edit-profile" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen name="workout-details" options={{ headerShown: false }} />
    </Stack>
  );
}