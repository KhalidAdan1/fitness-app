import { router } from "expo-router"
import { Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Settings = () => {
return(
    <SafeAreaView >
        <TouchableOpacity
        onPress={()=> {
            router.push('/(auth)/welcome')
        }}>
            <Text >
                Sign out
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
)

}

export default Settings