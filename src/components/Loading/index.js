import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import colors from "~/style";
const { secondaryRed } = colors;

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color={secondaryRed} />
    </View>
  );
};

export default Loading;
