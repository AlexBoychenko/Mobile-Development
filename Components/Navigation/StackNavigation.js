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
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("Add Movie")}
            >
              <MaterialCommunityIcons name="plus" size={35} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="Add Movie" component={AddMovie} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
