import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity } from "react-native"

const Home = () => {
  const { userName } = useLocalSearchParams();
    return (
      <SafeAreaView className="flex  items-center flex-1">
        {userName ? (
          <Text>Welcome back {userName}</Text>
        ): (
          <Text>Welcome back Guest</Text>
        )}

      </SafeAreaView>
    );
  };

export default Home