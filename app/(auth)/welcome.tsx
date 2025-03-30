import { router } from "expo-router";
import { SafeAreaView, View, TouchableOpacity , Text} from "react-native";

const Welcome = () => {

<SafeAreaView>
        <Text className="flex text-6xl flex-auto text-white">Ready to change 
          the your {'\n'}
          physqiue 4ever? 
        </Text>
        <View className="max-w-md top-44">
        <TouchableOpacity className="max-w-md py-4 bg-blue-500 rounded-xl
                   flex items-center justify-center mx-6"
                   activeOpacity={0.8}
          onPress={() => {
            router.replace('/(auth)/login');
          } }>
            
          </TouchableOpacity>
          </View>
    </SafeAreaView>
}

export default Welcome