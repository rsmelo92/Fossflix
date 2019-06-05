import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("screen");
const HEIGHT_VALUE = height * 0.7;

const Highlight = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: HEIGHT_VALUE,
    backgroundColor: "white"
  }
});

export default Highlight;
