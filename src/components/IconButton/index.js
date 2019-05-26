import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const IconButton = ({ icon, onPress, color = "#fff", size = 30, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.touchable, style]}>
      <Icon name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: "transparent"
  }
});
