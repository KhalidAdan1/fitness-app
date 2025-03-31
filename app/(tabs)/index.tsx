import "nativewind";
import { Redirect } from "expo-router";
import React from "react";

const Home = () => {
  // Use Redirect component instead of programmatic navigation
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;