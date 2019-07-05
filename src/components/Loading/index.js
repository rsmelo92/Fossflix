import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { withNavigation } from "react-navigation";
import colors from "~/style";
const { secondaryRed, backgroundBlack95 } = colors;

const Loading = ({ text = "", navigation }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: backgroundBlack95
    }}
  >
    <ActivityIndicator size="large" color={secondaryRed} />
    {!!text && (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: secondaryRed, marginTop: 20, fontSize: 18 }}>
          Loading {text}
        </Text>
        <Text
          style={{ color: secondaryRed, fontWeight: "bold", marginTop: 10 }}
          onPress={() => navigation.navigate("Home")}
        >
          Cancel
        </Text>
      </View>
    )}
  </View>
);

export default withNavigation(Loading);
