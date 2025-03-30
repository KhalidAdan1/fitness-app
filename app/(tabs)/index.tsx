import "nativewind";
import { Href, Redirect, useNavigation } from "expo-router";
import React from "react";
import { View , Text } from "react-native";


const Home = () => {

 const navigation = useNavigation();
 navigation.navigate('/welcome');

 return (
   <View>
   
     <Text>Welcome Back!</Text>
   </View>
 );
  
};

export default Home;