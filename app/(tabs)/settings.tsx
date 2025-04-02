import { router } from "expo-router"
import { Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Settings = () => {
return(
    <SafeAreaView >
        <View>
            <ActionButton 
            label='Prefered units'
            onPress ={()=> {
                router.push('/(roots)/preferred-units')
            }}
            />
        </View>
    </SafeAreaView>
)

}
const ActionButton = ({ icon, label, onPress }: any) => (
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