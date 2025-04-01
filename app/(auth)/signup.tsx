import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';

const SignUp = () => {
  const [name , setName ]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // On successful signup:
    router.push({
      pathname: '/(tabs)',  
      params: { userName: name },
    });
  };

  return (
    <View className="flex-1 bg-gray-100 p-6 justify-center">
      <Text className="text-3xl font-bold text-center mb-8">Create Account</Text>
      
      <View className="mb-4">
        <Text className='text-gray-700 mb-2'>Name</Text>
        <TextInput 
        className='bg-white p-4 rounded-lg border border-gray-300'
        placeholder='Enter your name'
        value={name}
        onChangeText={setName}
        autoCapitalize='none' />
        <Text className="text-gray-700 mb-2">Email</Text>
        <TextInput
          className="bg-white p-4 rounded-lg border border-gray-300"
          placeholder="Enter your email"
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
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg items-center"
        onPress={handleSignUp}
        disabled={loading}
      >
        <Text className="text-white font-bold">
          {loading ? 'Creating account...' : 'Sign Up'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="mt-4 items-center"
        onPress={() => router.back()}
      >
        <Text className="text-blue-500">Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;