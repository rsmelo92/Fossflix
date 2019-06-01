import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { withNavigation } from "react-navigation";
import colors from "~/style";
import Orientation from "react-native-orientation";

const { mainSalmon, backgroundBlack95 } = colors;

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            Orientation.lockToLandscape();

            this.props.navigation.navigate("Video");
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundBlack95
  }
});
