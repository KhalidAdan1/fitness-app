import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"

const Home = () => {
  const { userName } = useLocalSearchParams();
    return (
      <SafeAreaView className="flex  items-center flex-1">
        {userName ? (
          <Text>Welcome back {userName}</Text>
        ): (
          <Text>Welcome back Guest</Text>
        )}
        <View className="flex items-center justify-end">
   <TouchableOpacity onPress={()=> {
 router.navigate('/(roots)/profile')
}}>
  
        <Ionicons name="person" size={20} color='gray-400'/>
   </TouchableOpacity>
  
        </View>

      </SafeAreaView>
    );
  };

export default Home