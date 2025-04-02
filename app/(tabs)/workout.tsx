import { View, Text, Pressable, ScrollView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';

const workoutDetails = {
  '1': {
    id: '1',
    name: 'Full Body HIIT',
    duration: '30 min',
    calories: 320,
    difficulty: 'Intermediate',
    description: 'High-intensity interval training that targets all major muscle groups with minimal equipment needed.',
    exercises: [
      { name: 'Jump Squats', sets: '3 x 15', rest: '30 sec' },
      { name: 'Push-Ups', sets: '3 x 12', rest: '30 sec' },
      { name: 'Burpees', sets: '3 x 10', rest: '45 sec' },
      { name: 'Mountain Climbers', sets: '3 x 20', rest: '30 sec' },
      { name: 'Plank', sets: '3 x 30 sec', rest: '30 sec' },
    ]
  },
  
};

export default function WorkoutScreen() {
  const { colorScheme } = useColorScheme();
  const { id } = useLocalSearchParams();
  const workout = workoutDetails[id as keyof typeof workoutDetails];

  if (!workout) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100 dark:bg-gray-900">
        <Text className="text-gray-900 dark:text-white">Workout not found</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      className="flex-1 bg-gray-100 dark:bg-gray-900"
      contentContainerStyle={{ padding: 16 }}
    >
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <Pressable onPress={() => router.back()}>
          <Ionicons 
            name="arrow-back" 
            size={24} 
            className="text-gray-900 dark:text-white"
          />
        </Pressable>
        <Text className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
          Workout Details
        </Text>
      </View>

      {/* Workout Overview */}
      <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-6 shadow-sm">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {workout.name}
        </Text>
        <View className="flex-row space-x-4 mb-3">
          <View className="flex-row items-center">
            <Ionicons 
              name="time-outline" 
              size={16} 
              className="text-gray-500 dark:text-gray-300 mr-1" 
            />
            <Text className="text-gray-500 dark:text-gray-300">
              {workout.duration}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons 
              name="flame-outline" 
              size={16} 
              className="text-gray-500 dark:text-gray-300 mr-1" 
            />
            <Text className="text-gray-500 dark:text-gray-300">
              {workout.calories} cal
            </Text>
          </View>
          <View className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full">
            <Text className="text-blue-600 dark:text-blue-300 text-xs">
              {workout.difficulty}
            </Text>
          </View>
        </View>
        <Text className="text-gray-700 dark:text-gray-300">
          {workout.description}
        </Text>
      </View>

      {/* Exercises List */}
      <View className="mb-6">
        <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Exercises ({workout.exercises.length})
        </Text>
        {workout.exercises.map((exercise: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; sets: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; rest: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined):any => (
          <View 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3 shadow-sm"
          >
            <Text className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {exercise.name}
            </Text>
            <View className="flex-row space-x-4">
              <Text className="text-gray-500 dark:text-gray-300">
                {exercise.sets}
              </Text>
              <Text className="text-gray-500 dark:text-gray-300">
                Rest: {exercise.rest}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <Pressable 
        className="bg-blue-500 py-3 rounded-lg items-center justify-center mb-6"
      >
        <Text className="text-white font-bold">Start Workout</Text>
      </Pressable>
    </ScrollView>
  );
}