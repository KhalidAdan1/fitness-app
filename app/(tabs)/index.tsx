import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"


const workoutData = [
  { id: '1', name: 'Full Body HIIT', duration: '30 min', calories: 320, difficulty: 'Intermediate' },
  { id: '2', name: 'Upper Body Strength', duration: '45 min', calories: 280, difficulty: 'Beginner' },
  { id: '3', name: 'Yoga Flow', duration: '60 min', calories: 180, difficulty: 'All Levels' },
];

const Home = () => {
  const { userName } = useLocalSearchParams();
    return (
      <SafeAreaView className="flex  items-center flex-1">
        {userName ? (
          <Text>Welcome back {userName}</Text>
        ): (
          <Text>Welcome back Guest</Text>
        )}
        <View className="flex justify-end">
   <TouchableOpacity onPress={()=> {
 router.navigate('/(roots)/profile')
}}>
  
        <Ionicons name="person" size={20} color='gray-400'/>
   </TouchableOpacity>
  
        </View>
        <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white">
          Today's Workouts
        </Text>
        <Pressable onPress={() => router.push('/(tabs)/workout')}>
          <Text className="text-blue-500">See All</Text>
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {workoutData.map((workout) => (
          <Pressable 
            key={workout.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm"
          >
            <View className="flex-row justify-between items-start">
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                  {workout.name}
                </Text>
                <Text className="text-gray-500 dark:text-gray-400 mt-1">
                  {workout.duration} • {workout.calories} cal
                </Text>
              </View>
              <View className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full">
                <Text className="text-blue-600 dark:text-blue-300 text-xs">
                  {workout.difficulty}
                  </Text>
              </View>
            </View>
            <View className="flex-row justify-between mt-4">
              <Pressable className="bg-blue-500 px-4 py-2 rounded-lg">
                <Text className="text-white">Start</Text>
              </Pressable>
              <Pressable className="flex-row items-center">
                <Ionicons 
                  name="bookmark-outline" 
                  size={20} 
                  className="text-gray-500 dark:text-gray-300 mr-1" 
                />
                <Text className="text-gray-500 dark:text-gray-300">Save</Text>
              </Pressable>
            </View>
          </Pressable>
        ))}
          </ScrollView>

      </SafeAreaView>
    );
  };
export default Home;