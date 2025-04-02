import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { router, usePathname } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setLoading(true);

    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          
          const isSuccess = Math.random() > 0.3;
          isSuccess ? resolve() : reject(new Error('Invalid credentials'));
        }, 1500);
      });

      router.push({
        pathname:'/(tabs)',
        params:{ Email : email}
      }
      );
      
    } catch (error:any) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gray-100 p-6 justify-center">
      <Text className="text-3xl font-bold text-center mb-8">Welcome Back</Text>
      
      <View className="mb-4">
        <Text className="text-gray-700 mb-2">Email</Text>
        <TextInput
          className="bg-white p-4 rounded-lg border border-gray-300"
          placeholder="email@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View className="mb-6">
        <Text className="text-gray-700 mb-2">Password</Text>
        <TextInput
          className="bg-white p-4 rounded-lg border border-gray-300"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg items-center"
        onPress={handleLogin}
        disabled={loading}
      >
        <Text className="text-white font-bold">
          {loading ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="mt-4 items-center"
        onPress={() => router.push('/(auth)/signup')}
      >
        <Text className="text-blue-500">Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;