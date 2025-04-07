import { Ionicons } from '@expo/vector-icons';
import { Redirect, router } from 'expo-router';
import { Pressable, SafeAreaView , Text} from 'react-native';

export default function NotFound() {
  return (
    <SafeAreaView className='flex font-medium'>
       <Pressable onPress={() => router.back()}>
                <Ionicons 
                  name="arrow-back" 
                  size={24} 
                  className="text-gray-900 dark:text-white"
                />
              </Pressable> 
        <Text className='flex items-center justify-center'>
          This page isn't found {`\n`}
           Please go back
        </Text>
    </SafeAreaView>
  )
}