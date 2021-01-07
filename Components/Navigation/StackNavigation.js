import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Movies from "../Screens/Movies";

const Stack = createStackNavigator();

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies List"
        component={Movies}
        options={{
          headerTitle: "Movie list",
        }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
