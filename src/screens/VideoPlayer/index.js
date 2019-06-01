import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Video from "react-native-video";
import Slider from "@react-native-community/slider";

import colors from "~/style";
import Controller from "~/src/components/Controller";

const { height, width } = Dimensions.get("window");
const { secondaryRed, backgroundBlack } = colors;

export default class VideoPlayer extends Component {
  static navigationOptions = {
    headerMode: "none"
  };
  constructor(props) {
    super(props);
    this.player = React.createRef();
    this.state = {
      currentTime: 0,
      seekableDuration: 0,
      duration: 0,
      paused: false,
      loading: true
    };
  }

  seekPlayer(valueToSeek) {
    this.player.current.seek(valueToSeek);
  }

  switchPause(paused) {
    this.setState({ paused });
  }

  render() {
    const {
      currentTime,
      duration,
      seekableDuration,
      paused,
      loading
    } = this.state;
    return (
      <View style={styles.playerContainer}>
        <Video
          style={styles.backgroundVideo}
          source={{
            uri:
              "https://archive.org/download/charlie_chaplin_film_fest/charlie_chaplin_film_fest.mp4"
          }}
          onProgress={({ seekableDuration, currentTime }) =>
            this.setState({ currentTime, seekableDuration })
          }
          onLoad={({ duration, currentPosition }) => {
            const { loading } = this.state;
            this.setState({ duration, loading: !loading });
          }}
          ref={this.player}
          // onBuffer={this.onBuffer} // Callback when remote video is buffering
          // onEnd={this.onEnd} // Callback when playback finishes
          // onError={this.videoError} // Callback when video cannot be loaded
          fullscreen
          fullscreenAutorotate={false}
          paused={paused}
        />
        <Controller
          movieName="Chaplin"
          playing={!paused}
          loading={loading}
          leftPress={() => this.seekPlayer(currentTime - 10)}
          rightPress={() => this.seekPlayer(currentTime + 10)}
          onPlayPress={() => this.switchPause(!paused)}
        >
          <Slider
            style={styles.slider}
            disabled={!currentTime > 0}
            minimumValue={0}
            maximumValue={seekableDuration}
            onSlidingComplete={value => {
              this.seekPlayer(value);
            }}
            value={currentTime}
            thumbTintColor={secondaryRed}
            minimumTrackTintColor="#FFF"
            maximumTrackTintColor="#FFF"
          />
        </Controller>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerContainer: {
    flex: 1,
    backgroundColor: backgroundBlack,
    height,
    width: "100%"
  },
  backgroundVideo: {
    flex: 1,
    width: "100%"
  },
  slider: {
    alignSelf: "center",
    width,
    height: 40
  }
});

//https://archive.org/download/charlie_chaplin_film_fest/charlie_chaplin_film_fest.mp4
