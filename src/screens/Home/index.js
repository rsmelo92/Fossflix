import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Button,
  FlatList,
  StatusBar
} from "react-native";
import { human } from "react-native-typography";
import { withNavigation } from "react-navigation";
import Orientation from "react-native-orientation";
import createRelayQueryRenderer from "~/src/hoc/relayQueryRenderer";
import MovieCard from "~/src/components/MovieCard";
import Highlight from "~/src/components/Highlight";
import colors from "~/style";

const { mainSalmon, backgroundBlack95 } = colors;

class Home extends Component {
  onPress = item => {
    this.props.navigation.navigate("VideoInfo", {
      title: item.name
    });
  };
  render() {
    const { comediesWithLimit, navigation } = this.props;
    const highlightedIndex = Math.floor(Math.random() * 11) + 0;
    return (
      <ScrollView style={styles.mainContainer}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Highlight
          movie={comediesWithLimit[highlightedIndex]}
          onPress={() => this.onPress(comediesWithLimit[highlightedIndex])}
        />
        <View style={styles.container}>
          <Text style={[human.headline, styles.title]}>Comédias</Text>
          <FlatList
            style={styles.movieShelf}
            keyExtractor={(item, index) => `${item}_${index}`}
            data={comediesWithLimit}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item, index }) =>
              index !== highlightedIndex && (
                <MovieCard movie={item} onPress={() => this.onPress(item)} />
              )
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const HomeWithNavigation = withNavigation(Home);

export default createRelayQueryRenderer(HomeWithNavigation, {
  query: graphql`
    query HomeQuery {
      comediesWithLimit(limit: 11) {
        image
        name
      }
    }
  `
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: backgroundBlack95
  },
  container: {
    marginHorizontal: 8
  },
  title: {
    color: "white",
    marginVertical: 10,
    // fontSize: 16,
    // fontWeight: "bold",
    marginLeft: 4
  },
  movieShelf: {
    marginBottom: 20
  }
});
