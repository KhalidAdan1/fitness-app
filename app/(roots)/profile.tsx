import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styles from'../styles/styles';

export default function Profile() {
  const { userName , Email } = useLocalSearchParams(); 
 
 const user = {
    name: userName || 'John',
    email: Email ||'alex@example.com',
    joinDate: 'Joined March 2024',
    workoutsCompleted: 24,
  };

  return (


    <SafeAreaView className="flex-1 bg-gray-50 p-6">
      <View className="items-center mb-8">
        <Text className={`${styles.container}`}>{user.name}</Text>
        <Text className="text-gray-500">{user.email}</Text>
      </View>

     
      <View className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <View className="flex-row justify-between mb-4">
          <StatItem value={user.workoutsCompleted} label="Workouts" />
          <StatItem value="5.0" label="Rating" icon="star" />
          <StatItem value="12" label="Following" icon="people" />
        </View>
        
        <Text className="text-gray-500 text-sm">
          {user.joinDate}
        </Text>
      </View>
      <View className="space-y-4">
        <ActionButton 
          icon="settings" 
          label="Account Settings" 
          className={`${styles.button}`}
          onPress={() => router.push('/settings')}
          />
        <ActionButton 
          icon="log-out" 
          label="Sign Out" 
          onPress={()=>{
              router.navigate('/(auth)/welcome')
            }}
            />
      </View>
    </SafeAreaView>

  );
}

 const StatItem = ({ value, label, icon }: any) => (
  <View className="items-center">
    <Text className="text-xl font-bold text-gray-900">
      {value} {icon && <Ionicons name={icon} size={16} color="#f59e0b" />}
    </Text>
    <Text className="text-gray-500 text-sm">{label}</Text>
  </View>
);

 const ActionButton = ({ icon, label, onPress, color = 'gray' }: any) => (
  <TouchableOpacity 
    className={`flex-row items-center p-4 bg-white rounded-lg border border-${color}-100`}
    onPress={onPress}
  >
    <Ionicons 
      name={icon} 
      size={20} 
      color={color === 'red' ? '#ef4444' : '#6b7280'} 
      className="mr-3"
    />
    <Text className={`flex-1 text-${color}-800 font-medium`}>{label}</Text>
    <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
  </TouchableOpacity>
);
