import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  renderImage(item, i) {
    return (
      <View key={i}>
        <Image
          style={{ height: 100, width: 100, flex: 1, flexDirection: "row" }}
          source={{ uri: item.uri }}
        />
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <Button
          title="Open image browser"
          onPress={() => {
            navigate("ImageBrowser");
          }}
        />
        <ScrollView style={styles.imageLayout}>
          {this.state.photos.map((item, i) => this.renderImage(item, i))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageLayout: {},
});
