import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet, StatusBar } from "react-native";
import IconButton from "~/src/components/IconButton";
import colors from "~/style";

const { mainSalmon, backgroundBlack, backgroundBlack95, brownie } = colors;

export default class MovieInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    const changeBackground =
      navigation.getParam("statusBar", "true") === "true" ? true : false;
    return {
      // title: navigation.getParam("title", "Movie"),
      // headerTintColor: brownie,
      // headerTitleStyle: {
      //   fontWeight: "normal"
      // },
      headerLeft: (
        <View style={{ marginTop: 20 }}>
          <IconButton icon="arrow-left" />
        </View>
      ),
      headerStyle: {
        backgroundColor: changeBackground ? "transparent" : backgroundBlack95
      }
    };
  };
  state = {
    statusBar: true
  };
  toggleStatusBar = (current, positionY) => {
    if (positionY > 0) {
      this.props.navigation.setParams({ statusBar: "false" });
      this.setState({ statusBar: false });
    } else {
      this.props.navigation.setParams({ statusBar: "true" });
      this.setState({ statusBar: true });
    }
  };
  render() {
    const { statusBar } = this.state;
    return (
      <ScrollView
        style={styles.container}
        onScroll={event =>
          this.toggleStatusBar(statusBar, event.nativeEvent.contentOffset.y)
        }
      >
        <StatusBar
          translucent={statusBar}
          backgroundColor={statusBar ? backgroundBlack : backgroundBlack95}
          barStyle="light-content"
        />
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundBlack,
    flex: 1
  }
});
