import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Button,
  FlatList
} from "react-native";
import { withNavigation } from "react-navigation";
import colors from "~/style";
import Orientation from "react-native-orientation";
import createRelayQueryRenderer from "~/src/hoc/relayQueryRenderer";
import MovieCard from "~/src/components/MovieCard";
import Highlight from "~/src/components/Highlight";

const { mainSalmon, backgroundBlack95 } = colors;

class HomeScreen extends Component {
  render() {
    console.log("-====>", this.props.comediesWithLimit);
    const { comediesWithLimit } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Highlight item={comediesWithLimit[0]} />
        <Text style={styles.title}>Comédias</Text>
        <FlatList
          style={{ marginBottom: 20 }}
          keyExtractor={(item, index) => `${item}_${index}`}
          data={comediesWithLimit}
          horizontal
          renderItem={({ item }) => <MovieCard text={item.name} />}
        />
        <Button
          onPress={() => {
            Orientation.lockToPortrait();
            // Orientation.lockToLandscape();

            this.props.navigation.navigate("Video");
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    );
  }
}

export default createRelayQueryRenderer(HomeScreen, {
  query: graphql`
    query HomeQuery {
      comediesWithLimit(limit: 10) {
        _id
        image
        name
        files
        info
      }
    }
  `
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundBlack95
  },
  title: {
    color: "white",
    marginVertical: 10,
    fontSize: 18,
    marginLeft: 4
  }
});
