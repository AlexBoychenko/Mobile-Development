import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./Components/Navigation/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}
