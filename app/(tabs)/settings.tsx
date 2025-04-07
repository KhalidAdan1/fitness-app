import { router, useLocalSearchParams } from "expo-router"
import { Button, Pressable, Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "../styles/styles"

const Settings = () => {
    const { userName , Email } = useLocalSearchParams(); 
return(
    <SafeAreaView >
         <View className="items-center mb-8">
                <Text className="text-2xl font-bold text-gray-900">{userName}</Text>
                <Text className="text-gray-500">{Email}</Text>
              </View>
        
        <View>
            <ActionButton 
            label='Prefered units'
            />
           <Pressable 
    className="py-3 border-b border-gray-200 dark:border-gray-700"
      onPress={() => router.push('../(roots)/help')}
>
  <Text className="text-gray-900 dark:text-white">
    Help & Support
  </Text>
</Pressable>
<Pressable style={styles.button}>
  <Text style={styles.buttonText}>
    Hello
  </Text>
</Pressable>
        </View>
    </SafeAreaView>
)

}
const ActionButton = ({ label, onPress }: any) => (
    <TouchableOpacity 
      className={`flex-row items-center p-4 bg-white rounded-lg border border-gray-100`}
      onPress={onPress}
    >
     
      <Text className={`flex-1 text-green-800 font-medium`}>{label}</Text>

    </TouchableOpacity>
  );


export default Settings

/*
what i want in my settings  
 Preferred units (metric/imperial)
 Language selection
 
 About & Legal
 Version info
 Terms of service
 Privacy policy links
 */
