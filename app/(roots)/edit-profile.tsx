import { useNavigation } from "expo-router";
import { useEffect } from "react";

const editProfile = () => {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({
        headerShown: false, // Hide the header for this screen
      });
    }, [navigation]);
  

}

export default editProfile