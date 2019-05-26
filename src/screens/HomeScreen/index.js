import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { withNavigation } from "react-navigation";

class HomeScreen extends Component {
  render() {
    console.log("this", this.props);

    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("Video")}
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
    alignItems: "center"
  }
});
