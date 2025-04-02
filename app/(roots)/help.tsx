import { View, Text, Pressable, Linking, Alert, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';

export default function HelpScreen() {
  const { colorScheme } = useColorScheme();

  const contactMethods = [
    {
      title: "Email Support",
      icon: "mail",
      action: () => Linking.openURL('mailto:support@yourapp.com?subject=Help Request')
    },
    {
      title: "Live Chat",
      icon: "chatbubble-ellipses",
      action: () => Alert.alert("Live chat is available M-F 9AM-5PM")
    },
    {
      title: "FAQ",
      icon: "help-circle",
      
    },
    {
      title: "Report a Bug",
      icon: "bug",

    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-gray-900 p-4">
      <View className="flex-row items-center mb-6">
        <Pressable onPress={() => router.back()}>
          <Ionicons 
            name="arrow-back" 
            size={24} 
            className="text-gray-900 dark:text-white"
          />
        </Pressable>
        <Text className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
          Help & Support
        </Text>
      </View>
      <View className="mb-6 bg-white dark:bg-gray-800 rounded-lg p-4">
        <Text className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Contact Options
        </Text>
        {contactMethods.map((method, index) => (
          <Pressable
            key={method.title}
            onPress={method.action}
            className={`flex-row items-center py-4 ${index !== contactMethods.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
          >
            <Text className="flex-1 text-gray-900 dark:text-white">
              {method.title}
            </Text>
            <Ionicons 
              name="chevron-forward" 
              size={18} 
              className="text-gray-400" 
            />
          </Pressable>
        ))}
        </View>
      <View className="bg-white dark:bg-gray-800 rounded-lg p-4">
        <Text className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Resources
        </Text>
        <Pressable 
          className="flex-row items-center py-4 border-b border-gray-200 dark:border-gray-700"
          onPress={() => Linking.openURL('https://yourapp.com/terms')}
        >
          <Ionicons 
            name="document-text" 
            size={20} 
            className="text-blue-500 mr-3" 
          />
          <Text className="flex-1 text-gray-900 dark:text-white">
            Terms of Service
          </Text>
        </Pressable>
        <Pressable 
          className="flex-row items-center py-4"
          onPress={() => Linking.openURL('https://yourapp.com/privacy')}
        >
          <Ionicons 
            name="shield-checkmark" 
            size={20} 
            className="text-blue-500 mr-3" 
          />
          <Text className="flex-1 text-gray-900 dark:text-white">
            Privacy Policy
          </Text>
        </Pressable>
      </View>

   
      <View className="mt-8 items-center">
        <Text className="text-gray-500 dark:text-gray-400">
          App Version 1.0.0
        </Text>
        <Text className="text-gray-500 dark:text-gray-400 mt-1">
          © 2023 YourApp Name
        </Text>
      </View>
    </SafeAreaView>
  );
}