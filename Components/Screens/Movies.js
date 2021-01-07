import React from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { MoviesList } from "../MoviesList";

import { Container, List, ListItem, Text } from "native-base";

const Movies = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container style={{ height: "100%" }}>
          <List>
            {MoviesList.Search.map((item) => (
              <View key={item.imdbID}>
                <TouchableOpacity style={{ backgroundColor: "#fff" }}>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        square
                        source={item.Poster}
                        style={{ height: 80 }}
                      />
                    </Left>
                    <Body>
                      <Text>{item.Title}</Text>
                      <Text note numberOfLines={1}>
                        {item.Year}
                      </Text>
                      <Text>{item.Type}</Text>
                    </Body>
                  </ListItem>
                </TouchableOpacity>
              </View>
            ))}
          </List>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movies;
