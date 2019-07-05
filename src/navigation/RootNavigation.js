import React from "react";
import { Animated, Easing, Platform } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconAlt from "react-native-vector-icons/MaterialIcons";

import Home from "~/src/screens/Home";
import Video from "~/src/screens/VideoPlayer";
import VideoInfo from "~/src/screens/VideoInfo";
import Search from "~/src/screens/Search";
import Settings from "~/src/screens/Settings";
import colors from "~/style";

const { mainSalmon, backgroundBlack, backgroundPurplish } = colors;

const ScreensStack = createStackNavigator({
  VideoInfo
});

const HomeStack = createStackNavigator(
  {
    Home,
    ScreensStack
  },
  {
    headerMode: "none"
  }
);

const SearchStack = createStackNavigator(
  {
    Search
  },
  {
    headerMode: "none",
    navigationOptions: {
      title: "Search"
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings
  },
  {
    headerMode: "none"
  }
);

const MainTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    More: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `movie-filter`;
          return <IconAlt name={iconName} size={20} color={tintColor} />;
        } else if (routeName === "More") {
          iconName = `text-subject`;
        } else if (routeName === "Search") {
          iconName = `feature-search`;
        }

        return <Icon name={iconName} size={20} color={tintColor} />;
      }
    }),
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: mainSalmon,
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: backgroundPurplish
      }
    }
  }
);

const MainStack = createStackNavigator(
  {
    MainTabNavigator,
    Video
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(MainStack);

const RootNavigation = () => {
  return <AppContainer />;
};

export default RootNavigation;
