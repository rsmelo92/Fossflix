import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import colors from "~/style";

const { mainSalmon, backgroundBlack95 } = colors;

const { height, width } = Dimensions.get("screen");
const HEIGHT_VALUE = height * 0.7;

const Highlight = ({ movie, onPress }) => {
  const { name, image } = movie;
  return (
    <TouchableHighlight onPress={() => onPress()}>
      <ImageBackground
        style={{ width: "100%", height: HEIGHT_VALUE }}
        resizeMode="stretch"
        source={{
          uri: image
        }}
      >
        <View style={styles.card}>
          <Text style={styles.movieTitle}>{name}</Text>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: HEIGHT_VALUE,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.6)"
  },
  movieTitle: {
    fontSize: 30,
    textAlign: "center",
    color: mainSalmon,
    letterSpacing: 5,
    lineHeight: 50,
    fontWeight: "bold",
    // fontFamily: "Bowlby One SC"
    fontFamily: "Garuda"
  }
});

export default Highlight;
