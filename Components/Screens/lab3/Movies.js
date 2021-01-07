import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { MoviesList } from "../../MoviesList";

import { Container, List, ListItem, Text } from "native-base";

const description = ({ navigation }) =>
  navigation.navigate("Description", {
    id: item.imdbID,
    poster: item.Poster,
    title: item.Title,
    year: item.Year,
    genre: item.Genre,
    director: item.Director,
    actors: item.Actors,
    country: item.Country,
    lang: item.Language,
    prod: item.Production,
    released: item.Released,
    runtime: item.Runtime,
    awards: item.Awards,
    rating: item.imdbRating,
    plot: item.Plot,
  });

const Movies = ({ navigation }) => {
  const [search, setSearch] = useState({
    AllMovies: MoviesList,
    TitleSearch: MoviesList.Search,
    AddedMovies: route.params,
    MovieList: {},
  });

  const handleSearch = (text) => {
    setSearch({
      TitleSearch: search.MovieList.Search.filter((i) =>
        i.Title.toLowerCase().includes(text.toLowerCase())
      ),
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Container style={{ height: "100%" }}>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input
                placeholder="Search"
                onChangeText={(text) => handleSearch(text)}
              />
            </Item>
          </Header>
          <List>
            {search.MovieList.Search.map((item) => (
              <View key={item.imdbID}>
                <TouchableOpacity
                  onPress={description(navigation)}
                  style={{ backgroundColor: "#fff" }}
                >
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
