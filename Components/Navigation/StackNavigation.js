import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Movies from "../Screens/Movies";
import Description from "../Screens/lab4/Description";
import AddMovie from "../Screens/lab4/AddMovie";
import ImageList from "../Screens/lab5/ImageList";
import AddImage from "../Screens/lab5/AddImage";

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

const ImageStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Images"
        component={ImageList}
        options={{
          headerTitle: "Image layout",
        }}
      />
      <Stack.Screen
        name="ImageBrowser"
        component={AddImage}
        options={{ title: "Selected 0 files" }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ImageStackNavigator };
