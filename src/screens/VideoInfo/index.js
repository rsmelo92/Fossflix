import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Orientation from "react-native-orientation";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import MovieCard from "~/src/components/MovieCard";
import IconButton from "~/src/components/IconButton";
import CollapsibleText from "~/src/components/CollapsibleText";
import { header } from "./header";
import colors from "~/style";

const {
  mainSalmon,
  backgroundBlack,
  backgroundBlack95,
  backgroundBlack15,
  brownie
} = colors;

function trimString(description) {
  return description
    .replace(/(\\n)/g, ".")
    .replace(/(?:https?|ftp):\/\/[\n\S]+/gi, "")
    .replace(/([^a-z0-9]+)/gi, " ");
}

export default class MovieInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    const changeBackground =
      navigation.getParam("statusBar", "true") === "true" ? true : false;
    return header(changeBackground, navigation, styles);
  };

  state = {
    statusBar: true
  };

  toggleStatusBar = (current, positionY) => {
    if (positionY > 0) {
      this.props.navigation.setParams({ statusBar: "false" });
      this.setState({ statusBar: false });
    } else {
      this.props.navigation.setParams({ statusBar: "true" });
      this.setState({ statusBar: true });
    }
  };

  render() {
    const { statusBar } = this.state;
    const { navigation } = this.props;
    const image = navigation.getParam("image", "");
    const title = navigation.getParam("title", "");
    const files = navigation.getParam("files", "");
    const description = trimString(navigation.getParam("description", ""));
    const statusBarBGColor = statusBar ? backgroundBlack : backgroundBlack95;
    const height = 60;

    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          translucent={statusBar}
          backgroundColor={statusBarBGColor}
          barStyle="light-content"
        />
        <ScrollView
          style={styles.container}
          onScroll={event =>
            this.toggleStatusBar(statusBar, event.nativeEvent.contentOffset.y)
          }
        >
          <MovieCard
            movie={{ image }}
            height={220}
            onPress={() =>
              navigation.navigate("Video", {
                files,
                title,
                lastRoute: navigation.state.routeName
              })
            }
            shadow={false}
          >
            <View style={[styles.iconWrapper, { height, marginTop: 20 }]}>
              <Icon
                style={{ marginTop: -2 }}
                name="play"
                size={height}
                color={mainSalmon}
              />
            </View>
            <LinearGradient
              style={styles.titleWrapper}
              colors={[backgroundBlack15, "#18050409", "#180504"]}
            >
              <Text style={styles.titleText}>{title}</Text>
            </LinearGradient>
          </MovieCard>

          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <View style={styles.descriptionWrapper}>
              <CollapsibleText
                textStyle={styles.descriptionText}
                text={description}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: backgroundBlack95
  },
  container: {
    backgroundColor: backgroundBlack,
    flex: 1
  },
  closeIcon: {
    marginRight: 10
  },
  iconWrapper: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: mainSalmon
  },
  titleWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingBottom: 14
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: mainSalmon
  },
  descriptionWrapper: {
    flex: 1,
    marginHorizontal: 10
  },
  descriptionText: {
    color: "#fff",
    lineHeight: 20
  }
});
