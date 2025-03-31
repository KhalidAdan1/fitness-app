import { router } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import 'nativewind';
const Welcome = () => {
  useEffect(() => {
    // If you need to hide header, do it here
    // But with Expo Router, you might want to do this in the layout file instead
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 p-4">
        <Text className="text-6xl text-white">
          Ready to change your {'\n'}
          physique 4ever?
        </Text>
        
        <View className="mt-36 max-w-md">
          <TouchableOpacity
            className="py-4 bg-blue-500 rounded-xl items-center justify-center mx-6"
            activeOpacity={0.8}
            onPress={() => router.replace('/(auth)/login')}
          >
            <Text className="text-white font-bold">Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;