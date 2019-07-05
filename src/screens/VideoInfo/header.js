import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { View } from "react-native";
import IconButton from "~/src/components/IconButton";
import colors from "~/style";

const {
  mainSalmon,
  backgroundBlack,
  backgroundBlack95,
  backgroundBlack15,
  brownie
} = colors;

const header = (changeBackground, navigation, styles) => ({
  headerTintColor: brownie,
  headerTitleStyle: {
    fontWeight: "normal"
  },
  headerRight: (
    <View style={styles.closeIcon}>
      <IconButton
        icon="close"
        size={22}
        color={brownie}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  ),
  headerTransparent: true,
  headerBackground: changeBackground && (
    <LinearGradient
      colors={["#180504", "#180504", "#18050408"]}
      style={{
        height: 85
      }}
    />
  ),
  headerStyle: {
    backgroundColor: changeBackground ? backgroundBlack15 : backgroundBlack
  }
});

export { header };
