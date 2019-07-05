import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import colors from "~/style";

const { secondaryRed, backgroundBlack95 } = colors;

const MovieCard = ({
  movie,
  onPress,
  height,
  width,
  shadow = true,
  children
}) => {
  const { name, image } = movie;
  return (
    <TouchableOpacity
      style={[styles.container, { width, height }]}
      onPress={
        () => onPress()
        // Orientation.lockToPortrait();
        //       // Orientation.lockToLandscape();
        //       this.props.navigation.navigate("Video");
      }
    >
      <ImageBackground
        style={{ width, height }}
        resizeMode="cover"
        source={{
          uri: image
        }}
      >
        <View
          style={[
            styles.card,
            shadow && { backgroundColor: "rgba(255,255,255, 0.3)" }
          ]}
        >
          {children ? children : <Text style={styles.movieTitle}>{name}</Text>}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4
  },
  card: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "rgba(0,0,0, 0.6)"
  },
  movieTitle: {
    fontSize: 16,
    textAlign: "center",
    color: backgroundBlack95,
    letterSpacing: 1.5,
    lineHeight: 26,
    // fontWeight: "bold",
    padding: 10,
    letterSpacing: 2
  }
});

export default MovieCard;
