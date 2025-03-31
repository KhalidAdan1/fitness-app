import { router } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity } from "react-native"

const Home = () => {


    
    return (
      <SafeAreaView className="flex justify-center items-center flex-1">
        <Text className="flex justify-center items-center flex-auto">Welcome Back </Text>
        <TouchableOpacity
          onPress={() => {
            router.navigate('/(auth)/login')
          }}
        ><Text>
          Settings
        </Text>
  
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

export default Home