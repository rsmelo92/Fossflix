import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MovieCard = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: 130,
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginHorizontal: 4,
    alignContent: "center"
  }
});

export default MovieCard;
