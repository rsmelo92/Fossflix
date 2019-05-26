import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "~/src/screens/HomeScreen";
import Video from "~/src/screens/VideoPlayer";
import Search from "~/src/screens/Search";
import Settings from "~/src/screens/Settings";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

const SearchStack = createStackNavigator(
  {
    Search
  },
  {
    headerMode: "none"
  }
);

const MainTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    More: Settings
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
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
