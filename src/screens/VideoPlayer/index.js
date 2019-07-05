import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Video from "react-native-video";
import Slider from "@react-native-community/slider";
import Loading from "~/src/components/Loading";

import colors from "~/style";
import Controller from "~/src/components/Controller";
import { fetchMovie } from "~/utils/fetchMovie";

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
      uri: null,
      title: null,
      lastRoute: null,
      currentTime: 0,
      seekableDuration: 0,
      duration: 0,
      paused: false
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const files = navigation.getParam("files", "");
    const uri = await fetchMovie(files);
    const title = navigation.getParam("title", "");
    const lastRoute = navigation.getParam("lastRoute", "");

    this.setState({ uri, title, lastRoute });
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
      uri,
      title,
      lastRoute
    } = this.state;
    const { navigation } = this.props;
    return !uri ? (
      <Loading text={uri ? "Movie Data" : "Movie Information"} />
    ) : (
      <View style={styles.playerContainer}>
        <Video
          style={styles.backgroundVideo}
          source={{ uri }}
          onProgress={({ seekableDuration, currentTime }) =>
            this.setState({ currentTime, seekableDuration })
          }
          onLoad={({ duration, currentPosition }) => {
            this.setState({ duration });
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
          movieName={title}
          playing={!paused}
          lastRoute={lastRoute}
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
            thumbTintColor={!currentTime > 0 ? "grey" : secondaryRed}
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
    backgroundColor: "black",
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
