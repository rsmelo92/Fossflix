import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableWithoutFeedback
} from "react-native";
import Orientation from "react-native-orientation";
import { withNavigation } from "react-navigation";
import IconButton from "~/src/components/IconButton";

const { height, width } = Dimensions.get("screen");

class Controller extends Component {
  state = {
    modalY: new Animated.Value(1),
    show: true
  };

  toggleController(show) {
    const { modalY } = this.state;
    Animated.timing(modalY, {
      duration: 150,
      toValue: show ? 0 : 1
    }).start(() => this.setState({ show: !show }));
  }

  render() {
    const {
      movieName,
      playing,
      leftPress,
      rightPress,
      onPlayPress,
      children,
      showController,
      navigation,
      lastRoute
    } = this.props;
    const { modalY, show } = this.state;

    return (
      <TouchableWithoutFeedback onPress={() => this.toggleController(show)}>
        <View style={styles.controller}>
          {show && (
            <Animated.View style={[styles.animatedView, { opacity: modalY }]}>
              <View style={styles.topContent}>
                <IconButton
                  icon="arrow-left"
                  onPress={() => {
                    Orientation.lockToPortrait();
                    navigation.navigate(lastRoute);
                  }}
                />
                <Text style={styles.title}> {movieName} </Text>
                <IconButton
                  icon="minus"
                  onPress={() => this.toggleController(show)}
                />
              </View>
              <View style={styles.centerContent}>
                <IconButton icon="pan-left" onPress={leftPress} size={80} />
                <IconButton
                  icon={playing ? "pause" : "play"}
                  onPress={onPlayPress}
                  size={60}
                />
                <IconButton icon="pan-right" onPress={rightPress} size={80} />
              </View>
              <View style={styles.bottomContent}>{children}</View>
            </Animated.View>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default withNavigation(Controller);

const styles = StyleSheet.create({
  controller: {
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: height
  },
  animatedView: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: width,
    width: height
  },
  topContent: {
    paddingTop: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: height
  },
  titleContainer: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 16
  },
  centerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%"
  },
  bottomContent: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    width: height
  }
});
